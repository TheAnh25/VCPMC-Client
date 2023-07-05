import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import axios from "axios";
import Paginations from "../../../components/pagination";
import "../../../sass/selectedField.scss";
import { Link } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
initTE({ Modal, Ripple });
const Managerole: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [roleUsers, setRoleUsers] = useState([]);
  const [exploitation, setExploitation] = useState([]);

  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4444/roleusers")
      .then((res) => {
        setRoleUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isTable, setIsTable] = useState<boolean>(true);

  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };

  return (
    <>
      {users ? (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Cài đặt
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Phân quyền người dùng
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Danh sách người dùng
                </span>
              </div>
              <div className=" flex items-center">
                <div onClick={handleClickIsTable} className="cursor-pointer">
                  {isTable ? (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Danh sách người dùng
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="border-[1px] border-[#FF7506] border-solid rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-normal">
                          Danh sách người dùng
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div onClick={handleClickIsNotTable} className="cursor-pointer">
                  {isTable ? (
                    <div className="border-[1px] border-[#FF7506] border-solid rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-normal">
                          Vai trò người dùng
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Vai trò người dùng
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Cotent Record  */}
              {isTable ? (
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1541px] w-full flex-col gap-6">
                    <div className="max-w-full">
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Nhập tên người dùng"
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
                              <th className="">Họ tên</th>
                              <th className="w-[252px]">Tên đăng nhập</th>
                              <th>Vai trò</th>
                              <th>Trạng thái</th>
                              <th>Email</th>
                              <th>Số điện thoại</th>
                              <th>Ngày hết hạn</th>
                              <th className="w-28"></th>
                            </tr>
                            {users?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center ">
                                      {val.first_name}
                                      {val.last_name}
                                    </td>
                                    <td className="text-center ">
                                      {val.account_login}
                                    </td>
                                    <td className="text-center">
                                      {val.role ? (
                                        <span>Admin</span>
                                      ) : (
                                        <span>Users</span>
                                      )}
                                    </td>
                                    <td className="text-center">
                                      {val.status ? (
                                        <td className="text-center ">
                                          <div className=" flex  items-center gap-1">
                                            <div>
                                              <FormControlLabel
                                                control={
                                                  <Switch
                                                    defaultChecked={true}
                                                  />
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
                                                  <Switch
                                                    defaultChecked={false}
                                                  />
                                                }
                                                label="Ngừng kích hoạt"
                                                className="text-[#FFFFFF]"
                                              />
                                            </div>
                                          </div>
                                        </td>
                                      )}
                                    </td>
                                    <td className="text-center  ">
                                      {val.email}
                                    </td>
                                    <td className="text-center  ">
                                      {val.phone_number}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.expire_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>

                                    <td>
                                      <Link
                                        to={`/setting/managerole/update/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Chỉnh sửa
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
                  <Link to="/setting/managerole/add">
                    <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="bg-[#2F2F41] h-full hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-user-plus text-[#FF7506] text-2xl font-bold"></i>
                        </div>
                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Thêm người dùng
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1541px] w-full flex-col gap-6">
                    <div className="max-w-full">
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Nhập tên người dùng"
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
                              <th className="">Tên nhóm người dùng</th>
                              <th className="">Số lượng người dùng</th>
                              <th>Vai trò</th>
                              <th className="w-[452px]">Mô tả</th>
                              <th className="w-28"></th>
                              <th className="w-28"></th>
                            </tr>
                            {roleUsers?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center ">{val.name}</td>

                                    <td className="text-center  ">
                                      {val.count_user}
                                    </td>
                                    <td className="text-center  ">
                                      {val.role}
                                    </td>
                                    <td className="text-center  ">
                                      {val.description}
                                    </td>

                                    <td>
                                      <Link
                                        to={`/setting/managerole/updateRoles/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Cập nhật
                                        </td>
                                      </Link>
                                    </td>
                                    <td>
                                      <td className=" flex justify-center  text-[#FF4747]  text-xs font-semibold">
                                        Xóa
                                      </td>
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
                  <Link to="/setting/managerole/addRoles">
                    <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="bg-[#2F2F41] h-full hover:cursor-pointer px-5 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-plus text-[#FF7506] text-2xl font-bold"></i>
                        </div>
                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Thêm vai trò
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

export default Managerole;
