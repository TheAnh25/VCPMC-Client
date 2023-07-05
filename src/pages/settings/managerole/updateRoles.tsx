import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CheckBoxItem from "../../../components/checkboxItem";

const UpdateRoles: React.FC = () => {
  const { id } = useParams();

  const [valuesRoleUsers, setValuesRoleUsers] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4444/roleusers/" + id)
      .then((res) => {
        setValuesRoleUsers({
          ...valuesRoleUsers,
          name: res.data[0].name,
          description: res.data[0].description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className="w-full">
          <Header />
          <div className="ml-[60px] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
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
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Phân quyền người dùng
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Cập nhật
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Cập nhật vai trò người dùng
                </span>
              </div>
              {/* Cotent   */}
              <div className="flex justify-between">
                <div className="flex gap-40">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="w-40">
                        <span className="text-[#FFFFFF] font-bold">
                          Tên vai trò:
                        </span>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                          value={valuesRoleUsers.name}
                          onChange={(e) =>
                            setValuesRoleUsers({
                              ...valuesRoleUsers,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">Mô tả:</span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                          value={valuesRoleUsers.description}
                          onChange={(e) =>
                            setValuesRoleUsers({
                              ...valuesRoleUsers,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* Tên nhóm chức năng */}

                    <span className="text-[#FFFFFF] text-lg font-bold">
                      Phân quyền chức năng:
                    </span>
                    <div className="bg-[#2F2F41B2] rounded-2xl">
                      <div className="px-6 py-6 flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          {/* Tên nhóm chức năng  */}
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-10">
                              <span className="text-[#FFAC69] font-bold text-xl">
                                Tên nhóm chức năng
                              </span>

                              <div className="flex flex-col gap-2">
                                {/* Chức năng mã chức năng  */}
                                <div className="flex gap-6 items-center">
                                  <div className="w-64">
                                    <CheckBoxItem titleCheckbox="Chức năng" />
                                  </div>
                                  <div className="text-[#FFFFFF] font-normal text-base">
                                    Mã chức năng
                                  </div>
                                </div>
                                {/* Phân quyền người dùng */}
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-6 items-center">
                                    <div className="w-64">
                                      <CheckBoxItem titleCheckbox="Phân quyền người dùng" />
                                    </div>
                                    <div className="text-[#FFFFFF] font-normal text-base">
                                      nguoidung_phanquyen
                                    </div>
                                  </div>
                                  <div className="border-[1px] border-solid border-[#727288]"></div>
                                </div>
                                {/* Tạo người dùng*/}
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-6 items-center">
                                    <div className="w-64">
                                      <CheckBoxItem titleCheckbox="Tạo người dùng" />
                                    </div>
                                    <div className="text-[#FFFFFF] font-normal text-base">
                                      nguoidung_tao
                                    </div>
                                  </div>
                                  <div className="border-[1px] border-solid border-[#727288]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Quản lý người dùng */}
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-12">
                              <span className="text-[#FFFFFF] font-bold text-xl">
                                Quản lý người dùng
                              </span>

                              <div className="flex flex-col gap-2">
                                {/* Cập nhật thông tin người dùng */}
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-6 items-center">
                                    <div className="w-64">
                                      <CheckBoxItem titleCheckbox="Cập nhật thông tin người dùng" />
                                    </div>
                                    <div className="text-[#FFFFFF] font-normal text-base">
                                      nguoidung_capnhat
                                    </div>
                                  </div>
                                  <div className="border-[1px] border-solid border-[#727288]"></div>
                                </div>
                                {/* Xóa người dùng*/}
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-6 items-center">
                                    <div className="w-64">
                                      <CheckBoxItem titleCheckbox="Xóa người dùng" />
                                    </div>
                                    <div className="text-[#FFFFFF] font-normal text-base">
                                      nguoidung_xoa
                                    </div>
                                  </div>
                                  <div className="border-[1px] border-solid border-[#727288]"></div>
                                </div>
                                {/*Xem thông tin chi tiết*/}
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-6 items-center">
                                    <div className="w-64">
                                      <CheckBoxItem titleCheckbox="Xem thông tin chi tiết" />
                                    </div>
                                    <div className="text-[#FFFFFF] font-normal text-base">
                                      nguoidung_xemchitiet
                                    </div>
                                  </div>
                                  <div className="border-[1px] border-solid border-[#727288]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#F5F5FF] border-[1px] border-solid"></div>
                        {/* Tên nhóm chức năng  */}
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-20">
                            <span className="text-[#FFFFFF] font-bold text-xl">
                              Quản lý thư viện
                            </span>

                            <div className="flex flex-col gap-2">
                              {/* Danh sách Media  */}
                              <div className="flex gap-6 items-center">
                                <div className="w-64">
                                  <CheckBoxItem titleCheckbox="Danh sách Media" />
                                </div>
                                <div className="text-[#FFFFFF] font-normal text-base">
                                  nguoidung_xemdanhsach
                                </div>
                              </div>
                              <div className="border-[1px] border-solid border-[#727288]"></div>
                              {/* Tải lên Media */}
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-6 items-center">
                                  <div className="w-64">
                                    <CheckBoxItem titleCheckbox="Tải lên Media" />
                                  </div>
                                  <div className="text-[#FFFFFF] font-normal text-base">
                                    nguoidung_tailentep
                                  </div>
                                </div>
                                <div className="border-[1px] border-solid border-[#727288]"></div>
                              </div>
                              {/* Chỉnh sửa thông tin Media*/}
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-6 items-center">
                                  <div className="w-64">
                                    <CheckBoxItem titleCheckbox="Chỉnh sửa thông tin Media" />
                                  </div>
                                  <div className="text-[#FFFFFF] font-normal text-base">
                                    nguoidung_chinhsua
                                  </div>
                                </div>
                                <div className="border-[1px] border-solid border-[#727288]"></div>
                              </div>
                              {/* Xóa Media*/}
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-6 items-center">
                                  <div className="w-64">
                                    <CheckBoxItem titleCheckbox="Xóa Media" />
                                  </div>
                                  <div className="text-[#FFFFFF] font-normal text-base">
                                    nguoidung_xoa
                                  </div>
                                </div>
                                <div className="border-[1px] border-solid border-[#727288]"></div>
                              </div>
                              {/* Phê duyệt Media*/}
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-6 items-center">
                                  <div className="w-64">
                                    <CheckBoxItem titleCheckbox="Phê duyệt Media" />
                                  </div>
                                  <div className="text-[#FFFFFF] font-normal text-base">
                                    nguoidung_pheduyet
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
            </div>

            <div className="flex justify-center items-center gap-8  mt-10">
              <Link to="/setting/managerole">
                <div className="button-cancel">
                  <button className="px-6 py-3 text-[#FF7506]">Hủy</button>
                </div>
              </Link>

              <div className="button-primary">
                <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRoles;
