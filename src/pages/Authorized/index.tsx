import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import "../../sass/selectedField.scss";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";

const Authorized: React.FC = () => {
  const [authorized, setAuthorized] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/authorized")
      .then((res) => {
        setAuthorized(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className=" w-full">
          <Header />
          <div className="ml-[60px] flex flex-col gap-6">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-4 items-center h-[30px]">
                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Quản lý
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Đối tác uỷ quyền
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Danh sách đối tác ủy quyền
              </span>
            </div>

            {/* Cotent Operators  */}
            <div className="flex gap-10 justify-between ">
              <div className=" max-w-[1541px] w-full flex-col gap-6">
                <div className="max-w-full">
                  <div className="max-w-[517px] w-full">
                    <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                      <input
                        className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                        placeholder="Họ tên, tên đăng nhập, email..."
                      />
                      <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                  <div className="w-full shrink-0 flex ">
                    <thead>
                      <table className="shadow-lg w-full table-fixed tab">
                        <tr className="text-[#FFAC69]  text-base font-bold bg-[#2F2F41]">
                          <th className="w-16">STT</th>
                          <th className="w-[252px]">Họ tên</th>
                          <th className="">Tên đăng nhập</th>
                          <th className="w-[252px]">Email</th>
                          <th>Ngày hết hạn</th>
                          <th className="w-[192px]">Trạng thái</th>
                          <th>Số điện thoại</th>
                          <th className="w-28"></th>
                        </tr>
                        {authorized?.map((val: any) => {
                          return (
                            <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                              <tr
                                key={val.id}
                                className="text[#535261] text-[14px] font-normal ">
                                <td className="text-center py-3 ">{val.id}</td>
                                <td className="text-center ">{val.name}</td>
                                <td className="text-center ">
                                  {val.name_login}
                                </td>
                                <td className="text-center  ">{val.email}</td>

                                <td className="text-center">
                                  {new Date(val.expire_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </td>
                                <td className="text-center  ">{val.phone}</td>

                                <td className="text-center">
                                  {val.status ? (
                                    <td className="text-center ">
                                      <div className=" flex  items-center gap-1">
                                        <div>
                                          <FormControlLabel
                                            control={
                                              <Switch defaultChecked={true} />
                                            }
                                            label="Đang kích hoạt"
                                            className="text-[#FFFFFF]"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  ) : (
                                    <td className="text-center">
                                      <div className=" flex items-center gap-1">
                                        <div>
                                          <FormControlLabel
                                            control={
                                              <Switch defaultChecked={false} />
                                            }
                                            label="Ngừng kích hoạt"
                                            className="text-[#FFFFFF]"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  )}
                                </td>

                                <td>
                                  <Link
                                    to={`/contract/authorized/${val.id}/update`}>
                                    <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                      Cập nhật
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
                  <div className=" flex justify-between px-6 mb-4">
                    <div className="flex gap-2 text-[#F5F5FF] items-center">
                      <span>Hiển thị </span>
                      <div className="border-[1px] border-solid border-[#FF7506] rounded">
                        <span className="px-4 py-2"> 13 </span>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Authorized;
