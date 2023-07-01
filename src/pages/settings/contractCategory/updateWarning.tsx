import React from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";

const UpdateWarning: React.FC = () => {
  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className=" w-full">
          <Header />
          <div className="ml-[60px] flex flex-col justify-between max-h-[80vh] h-full">
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
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Quản lý loại hợp đồng
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Loại hợp đồng
                </span>
              </div>
              {/* Cotent   */}
              <div className="max-w-[650px] w-full flex flex-col gap-6">
                <div className="bg-[#2F2F41]  px-6 py-6 flex flex-col  gap-[50px] h-[452px] rounded-2xl">
                  <span className="text-[#E5E5E5] font-bold text-2xl">
                    Cảnh báo hết hạn khai thác tác phẩm
                  </span>
                  <div className="flex gap-6 text-[#E5E5E5] font-bold text-lg">
                    <span>
                      Hợp đồng được cảnh báo trước thời gian hết hạn:{" "}
                    </span>
                    <div>
                      <input
                        className="text-[#727288] w-16 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                        type="text"
                      />
                    </div>
                    <span className="font-normal">ngày</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 ">
              <Link to="/setting/categorycontract">
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

export default UpdateWarning;
