import React from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import {
  optionsCountry,
  optionsMonthReport,
  optionsTimeReport,
} from "../../../constants/optionsSelect";
import { Select } from "antd";
import systemImage1 from "../../../assets/images/systemImage1.png";

const System: React.FC = () => {
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
                    Cài đặt
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Cài đặt hệ thống
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Cài đặt cấu hình
              </span>
            </div>

            {/* Cotent Record  */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-10">
                <div className="flex flex-col gap-4">
                  <div className="shrink-0">
                    <img
                      className="w-[571px] h-[320px] object-cover rounded-lg"
                      src={systemImage1}
                      alt=""
                    />
                  </div>
                  <span className="text-[#FFFFFF] text-center text-2xl font-medium">
                    Theme 1
                  </span>
                </div>
                <div className="">
                  <div className="flex justify-center items-center gap-6 h-full text-[#F5F5FF] font-bold text-2xl">
                    <div className="flex justify-center items-center">
                      <i className=" fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <div className="shrink-0">
                        <img
                          className="w-[240px] h-[160px] object-cover rounded-lg"
                          src={systemImage1}
                          alt=""
                        />
                      </div>
                      <span className="text-[#FFFFFF] text-center text-2xl font-medium">
                        Theme 2
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <div className="shrink-0">
                        <img
                          className="w-[240px] h-[160px] object-cover rounded-lg"
                          src={systemImage1}
                          alt=""
                        />
                      </div>
                      <span className="text-[#FFFFFF] text-center text-2xl font-medium">
                        Theme 3
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <div className="shrink-0">
                        <img
                          className="w-[240px] h-[160px] object-cover rounded-lg"
                          src={systemImage1}
                          alt=""
                        />
                      </div>
                      <span className="text-[#FFFFFF] text-center text-2xl font-medium">
                        Theme 4
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      <i className=" fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#FFFFFF] text-xl flex gap-4 items-center font-bold">
                <span>Ngôn ngữ hiển thị</span>
                <Select
                  options={optionsCountry}
                  defaultValue={optionsCountry[0].value}
                  style={{
                    width: 160,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default System;
