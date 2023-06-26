import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";
import CheckBoxItem from "../../components/checkboxItem";
import CheckBox from "../../components/checkbox";
import {
  optionsAccountGroup,
  optionsStatusColumn,
} from "../../constants/optionsSelect";
import { Checkbox, Select } from "antd";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

const Devices: React.FC = () => {
  const [devices, setDevices] = useState([]);
  const [statusDisableActive, setStatusDisableActive] = useState(1);
  const [statusEnableActive, setStatusEnableActive] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedDisableActive = () => {
    if (statusDisableActive === 1) {
      setStatusDisableActive(0);
      console.log(statusDisableActive, "statusDisableActive0");
    }
    if (statusDisableActive === 0) {
      setStatusDisableActive(1);
      console.log(statusDisableActive, "statusDisableActive1");
    }
  };

  const handleCheckedEnableActive = () => {
    if (statusEnableActive === 1) {
      setStatusEnableActive(0);
      console.log(statusEnableActive, " statusEnableActive");
    }
    if (statusEnableActive === 0) {
      setStatusEnableActive(1);
      console.log(statusEnableActive, " statusEnableActive");
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
    initTE({ Modal, Ripple });

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
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Danh sách thiết bị
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className="flex flex-col gap-6">
                  <div className=" max-w-[1541px] w-full flex flex-col gap-6">
                    <div className="max-w-full flex justify-between">
                      <div className="flex  w-full gap-16">
                        {/* Chọn nhóm tài khoản */}
                        <div>
                          <Select
                            options={optionsAccountGroup}
                            defaultValue={`Chọn nhóm tài khoản`}
                            style={{
                              width: 240,
                            }}
                          />
                        </div>
                        {/* Ẩn hiện cột  */}
                        <div>
                          <Select
                            options={optionsStatusColumn}
                            defaultValue={`Ẩn hiện cột`}
                            style={{
                              width: 160,
                            }}
                          />
                        </div>
                      </div>
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
                          />
                          <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th
                                className="w-16 pt-4 text-center"
                                onChange={handleChecked}>
                                <CheckBox
                                  isChecked={isChecked}
                                  titleCheckbox=""
                                />
                              </th>
                              <th className="w-16">STT</th>
                              <th>Tên thiết bị</th>
                              <th className="w-56">Trạng thái</th>
                              <th className="w-72">Địa điểm</th>
                              <th>Hạn hợp đồng</th>
                              <th>MAC Addresss</th>
                              <th>Memory</th>
                              <th className="w-24"></th>
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
                                        {val.status == 1 && (
                                          <Checkbox
                                            onChange={
                                              handleCheckedDisableActive
                                            }
                                          />
                                        )}
                                        {val.status == -1 && <Checkbox />}
                                        {val.status == 0 && (
                                          <Checkbox
                                            onChange={handleCheckedEnableActive}
                                          />
                                        )}
                                      </td>
                                    )}

                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center">
                                      {val.name_device}
                                    </td>
                                    <td className="text-center">
                                      {val.status === 1 && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                                            <p>
                                              Đang kích hoạt | Đang hoạt động{" "}
                                            </p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === 0 && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                            <p>Ngừng kích hoạt </p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === -1 && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                            <p>Đang bị khoá</p>
                                          </div>
                                        </td>
                                      )}
                                    </td>
                                    <td className="text-center  ">
                                      {val.location}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.date_contract
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center  ">
                                      {val.mac_address}
                                    </td>
                                    <td className="text-center  ">
                                      {val.memory}
                                    </td>
                                    <td>
                                      <Link
                                        to={`/contract/managedevices/detail/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Xem chi tiết
                                        </td>
                                      </Link>
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

                <div className="bg-[#2F2F41] w-[112px] h-[450px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                  {/* Thêm thiết bị  */}
                  <Link to="/contract/managedevices/add">
                    <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-solid fa-plus text-[#FF7506] text-2xl font-bold"></i>
                      </div>

                      <span className="text-[#FFFFFF] text-center font-medium text-xs">
                        Thêm thiết bị
                      </span>
                    </div>
                  </Link>
                  {/* Kích hoạt */}
                  {statusDisableActive === 0 && statusEnableActive === 0 ? (
                    <div className="flex w-[52px] flex-col justify-center items-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-solid fa-power-off text-[#878890] text-2xl font-bold"></i>
                      </div>
                      <div className="text-center">
                        <span className="text-[#878890] font-medium text-xs">
                          Kích hoạt thiết bị
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Kích hoạt thiết bị */}
                      {statusDisableActive === 0 && (
                        <div className="flex w-[52px] flex-col justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-power-off text-[#FF7506] text-2xl font-bold"></i>
                          </div>
                          <div className="text-center">
                            <span className="text-[#FFFFFF] font-medium text-xs">
                              Ngừng kích hoạt thiết bị
                            </span>
                          </div>
                        </div>
                      )}
                      {statusDisableActive === 1 && (
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-power-off text-[#FF7506] text-2xl font-bold"></i>
                          </div>
                          <div className="text-center">
                            <span className="text-[#FFFFFF] font-medium text-xs">
                              Kích hoạt thiết bị
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Khoá thiết bị */}

                  {statusDisableActive === 0 && statusEnableActive === 0 ? (
                    <div className="flex w-[52px] flex-col justify-center items-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-regular fa-lock text-[#878890] text-2xl font-bold"></i>
                      </div>
                      <div className="text-center">
                        <span className="text-[#878890] font-medium text-xs">
                          Khoá thiết bị
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Kích hoạt thiết bị */}
                      {statusDisableActive === 0 && (
                        <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-regular fa-lock text-[#FF7506] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Khoá thiết bị
                          </span>
                        </div>
                      )}
                      {statusDisableActive === 1 && (
                        <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-regular fa-lock text-[#FF7506] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Khoá thiết bị
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Xoá thiết bị */}

                  <div>
                    <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      {/* <!-- Button trigger vertically centered modal--> */}
                      <button
                        type="button"
                        className=""
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init
                        tabIndex={-1}
                        data-te-ripple-color="none">
                        <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-trash text-[#FF4747] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Xoá thiết bị
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* <!--Verically centered modal--> */}
                    <div
                      data-te-modal-init
                      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                      id="exampleModalCenter"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-modal="true"
                      role="dialog">
                      <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#3E3E5B] bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                          {/* <!--Modal body--> */}
                          <div className="relative p-4 flex flex-col items-center justify-center gap-6">
                            <div>
                              <p className="text-[#FFFFFF] text-2xl font-bold ">
                                Xóa thiết bị
                              </p>
                            </div>
                            <span className="text-[#FFFFFF] text-[14px] font-medium">
                              Bạn có chắc chắn muốn xoá các thiết bị này? Hành
                              động này không thể hoàn tác.
                            </span>
                          </div>

                          {/* <!--Modal footer--> */}
                          <div className="flex justify-center items-center gap-8 mb-4">
                            <div className="button-cancel">
                              <button
                                type="button"
                                data-te-modal-dismiss
                                aria-label="Close"
                                className="px-6 py-3 text-[#FF7506]">
                                Hủy
                              </button>
                            </div>

                            <div className="button-primary">
                              <button
                                type="submit"
                                className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Devices;
