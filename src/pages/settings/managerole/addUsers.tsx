import React from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import { DatePicker, Select } from "antd";
import { optionsRoleUsers } from "../../../constants/optionsSelect";

const AddUsers: React.FC = () => {
  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className="w-full">
          <Header />
          <div className="ml-[60px] flex flex-col gap-44">
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
                      Chỉnh sửa
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Chỉnh sửa thông tin người dùng
                </span>
              </div>
              {/* Cotent   */}
              <div className="flex justify-between">
                <div className="flex gap-16">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Tên người dùng:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Số điện thoại:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Ngày hết hạn:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <DatePicker
                          placeholder="yy/mm/dd"
                          className="w-[320px] h-full bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Vai trò:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <Select
                          options={optionsRoleUsers}
                          defaultValue={optionsRoleUsers[0].value}
                          style={{
                            width: 320,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">Email:</span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Tên đăng nhập:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Mật khẩu:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-80 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                <span className="text-[#F5F5FF] text-xs font-normal">
                  là những trường thông tin bắt buộc
                </span>
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

export default AddUsers;
