import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";

const Download: React.FC = () => {
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
                    Hỗ trợ
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Tải App
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">Tải App</span>
            </div>

            {/* Cotent Record  */}
            <div className=" max-w-[1292px] min-h-[604px] h-full w-full flex flex-col mx-auto gap-10">
              <div className=" flex justify-center items-center">
                <span className="text-6xl font-bold text-[#FFF9F4]">
                  Ứng dụng <span className="text-[#FF7506]">VCPMC </span>
                </span>
              </div>
              <div className="border-[1px] border-solid border-[#FF7506] max-w-[480px] w-full mx-auto"></div>
              <div className="flex justify-center items-center">
                <span className="text-3xl font-normal text-[#FFF9F4]">
                  Bạn vui lòng chọn{" "}
                  <span className=" font-bold">nền tảng </span> phù hợp để trải
                  nghiệm
                </span>
              </div>
              <div className="flex  justify-between">
                {/* Tool Upload  */}
                <div className="bg-[#2F2F41B2] max-w-[350px] w-full rounded-2xl ">
                  <div className="flex flex-col gap-20 px-20 py-8">
                    <div>
                      <i className="fa-solid fa-cloud-arrow-up flex justify-center items-center text-[#FFC727] font-bold text-9xl"></i>
                    </div>
                    <div className="flex justify-center items-center  ">
                      <div className="button-primary">
                        <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                          Tool Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Window  */}
                <div className="bg-[#2F2F41B2] max-w-[350px] w-full rounded-2xl ">
                  <div className="flex flex-col gap-20 px-20 py-8">
                    <div>
                      <i className="fa-brands fa-windows flex justify-center items-center text-[#43afda] font-bold text-9xl"></i>
                    </div>

                    <div className="flex justify-center items-center  ">
                      <div className="button-primary">
                        <button className="px-5 py-3 text-[#FFFFFF] font-semibold text-base">
                          Tải App Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Android  */}
                <div className="bg-[#2F2F41B2] max-w-[350px] w-full rounded-2xl ">
                  <div className="flex flex-col gap-20 px-20 py-8">
                    <div>
                      <i className="fa-brands fa-android flex justify-center items-center text-[#4bff27] font-bold text-9xl"></i>
                    </div>

                    <div className="flex justify-center items-center  ">
                      <div className="button-primary">
                        <button className="px-5 py-3 text-[#FFFFFF] font-semibold text-base">
                          Tải App Android
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
    </>
  );
};

export default Download;
