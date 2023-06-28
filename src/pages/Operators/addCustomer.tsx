import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import "../../sass/selectedField.scss";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
const AddCustomer: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hanldAddCustomer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/contract/operators/detail/${id}`);
    toast.success("Thêm người dùng thành công!");
  };
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
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Đơn vị sử dụng
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Chi tiết
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Thêm người dùng
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thêm người dùng
              </span>
            </div>
            <form onSubmit={hanldAddCustomer} className="flex flex-col gap-6">
              <div className="flex gap-10 justify-between ">
                <div className=" max-w-[1541px] w-full flex justify-between">
                  {/* Cột 1 */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Tên người dùng:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Vai trò:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-40 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">Email:</span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Cột 2 */}
                  <div className="flex flex-col gap-3 mr-[400px]">
                    <div className="flex gap-4">
                      <div className="w-48 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Tên đăng nhập:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-48 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Mật khẩu:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-48 flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Nhập lại mật khẩu:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
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
              <div className="flex justify-center items-center gap-8  mt-10">
                <Link to={`/contract/operators/detail/${id}`}>
                  <div className="button-cancel">
                    <button className="px-6 py-3 text-[#FF7506]">Hủy</button>
                  </div>
                </Link>

                <div className="button-primary">
                  <button
                    type="submit"
                    className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                    Lưu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
