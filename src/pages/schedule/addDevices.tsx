import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";
import CheckBoxItem from "../../components/checkboxItem";
import CheckBox from "../../components/checkbox";

const AddDevices: React.FC = () => {
  const [devices, setDevices] = useState([]);
  const [checkedItem, setCheckedItem] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedItem = () => {
    if (checkedItem) {
      setCheckedItem(false);
    } else {
      setCheckedItem(true);
    }
  };

  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:4444/devices")
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {devices && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Lập lịch phát
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Thêm lịch phát mới
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Áp lịch cho thiết bị
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Danh sách thiết bị
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className="flex flex-col gap-6">
                  <div className=" max-w-[1541px] w-full flex-col gap-6">
                    <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th
                                className="w-16 pt-4"
                                onChange={handleChecked}>
                                <CheckBox
                                  isChecked={isChecked}
                                  titleCheckbox=""
                                />
                              </th>
                              <th className="w-16">STT</th>
                              <th>Tên thiết bị</th>
                              <th>MAC Address</th>
                              <th>SKU/ID</th>
                              <th>Đơn vị sử dụng</th>
                              <th>Tên đăng nhập</th>
                              <th className="w-[450px]">Địa điểm hoạt động</th>
                            </tr>
                            {devices?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    {isChecked ? (
                                      <td className="text-center py-3 ">
                                        <CheckBox
                                          isChecked={isChecked}
                                          titleCheckbox=""
                                        />
                                      </td>
                                    ) : (
                                      <td className="text-center py-3 ">
                                        <CheckBoxItem titleCheckbox="" />
                                      </td>
                                    )}

                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center">
                                      {val.name_device}
                                    </td>

                                    <td className="text-center  ">
                                      {val.mac_address}
                                    </td>
                                    <td className="text-center  ">
                                      {val.id_device}
                                    </td>
                                    <td className="text-center  ">
                                      {val.store}
                                    </td>
                                    <td className="text-center  ">
                                      {val.name_login}
                                    </td>
                                    <td className="text-center  ">
                                      {val.location}
                                    </td>
                                  </tr>
                                </tbody>
                              );
                            })}
                          </table>
                        </thead>
                      </div>
                      {/* Pagination  */}
                      <div className=" flex justify-between px-6 mb-4">
                        <div className="flex gap-2 text-[#F5F5FF] items-center">
                          <span>Hiển thị </span>
                          <div className="border-[1px] border-solid border-[#FF7506] rounded">
                            <span className="px-4 py-2"> 12 </span>
                          </div>
                          <span>hàng trong mỗi trang </span>
                        </div>
                        <div>
                          <Paginations />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2F2F41] h-[200px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-check text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Lưu
                    </span>
                  </div>

                  <Link to="/schedule">
                    <div>
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-solid fa-x text-[#FF7506] text-2xl font-bold"></i>
                      </div>
                      <div className="text-center">
                        <span className="text-[#FFFFFF] font-medium text-xs">
                          Hủy
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDevices;
