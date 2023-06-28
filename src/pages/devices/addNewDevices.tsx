import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { DatePicker, Select } from "antd";
import "../../sass/datePicker.scss";
import { optionsCountry } from "../../constants/optionsSelect";
import CheckBoxItem from "../../components/checkboxItem";
import { Link } from "react-router-dom";

const AddNewDevices: React.FC = () => {
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
                    Danh sách thiết bị
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Thêm thiết bị mới
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thêm thiết bị mới
              </span>
            </div>
            {/* Cotent Record  */}
            <div className="flex gap-10 justify-between ">
              <div className=" max-w-[1541px] w-full">
                <div className="flex flex-col gap-6">
                  <div className=" flex justify-between">
                    {/* cột 1 */}
                    <div className=" flex flex-col gap-6">
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên thiết bị:
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
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            SKU/ID:
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
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Địa chỉ Mac:
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
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Thời hạn bảo hành:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <DatePicker
                            placeholder="yy/mm/dd"
                            className="w-[197px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                          />
                        </div>
                      </div>
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Label:
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
                      <div className="flex  gap-7">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Thông tin:
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
                      <div className="flex  gap-7">
                        <div className="w-48">
                          <span className="text-[#FFFFFF] font-bold">
                            Ghi chú
                          </span>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    {/* cột 2 */}
                    <div className=" flex flex-col gap-6 mr-[200px]">
                      <div className="flex gap-7">
                        <div className="w-44 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên đăng nhập:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex gap-7">
                        <div className="w-44 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Mật khẩu
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex gap-7">
                        <div className="w-44 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Nhập lại mật khẩu:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="flex gap-7">
                        <div className="w-44 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Vị trí:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="password"
                          />
                        </div>
                      </div>
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
            <div className="flex justify-center items-center gap-8 ">
              <Link to="/contract/managedevices">
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

export default AddNewDevices;
