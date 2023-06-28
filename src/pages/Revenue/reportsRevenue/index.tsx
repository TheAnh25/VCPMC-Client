import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  optionsMonthReport,
  optionsTimeReport,
} from "../../../constants/optionsSelect";
import { Select } from "antd";
import Recharts from "../../../components/recharts";

const Report: React.FC = () => {
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
                    Doanh thu
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Báo cáo doanh thu
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Báo cáo doanh thu
              </span>
            </div>

            {/* Cotent Record  */}
            <div className="flex gap-10 justify-between ">
              <div className="flex flex-col gap-6">
                <div className="flex  w-full gap-16">
                  {/* Chọn nhóm tài khoản */}
                  <div>
                    <Select
                      options={optionsTimeReport}
                      defaultValue={optionsTimeReport[0].value}
                      style={{
                        width: 160,
                      }}
                    />
                  </div>
                  {/* Ẩn hiện cột  */}
                  <div>
                    <Select
                      options={optionsMonthReport}
                      defaultValue={optionsMonthReport[0].value}
                      style={{
                        width: 160,
                      }}
                    />
                  </div>
                </div>
                <div className="max-w-[1541px] rounded-2xl bg-[#2F2F41] w-full ">
                  <div className="px-24 py-4 flex gap-4 h-full">
                    <div className="flex text-2xl font-bold flex-col gap-2 justify-center items-center">
                      <span className="text-[#FFFFFF] ">Tổng số bài hát</span>
                      <span className="text-[#FFAC69]">100</span>
                    </div>
                    <div className="w-[1px] border-[1px] border-solid border-[#C8C8DB] h-full"></div>
                    <div className="flex text-2xl font-bold flex-col gap-2 justify-center items-center">
                      <span className="text-[#FFFFFF] ">Tổng số lượt phát</span>
                      <span className="text-[#FFAC69]">32.000.000</span>
                    </div>
                    <div className="w-[1px] border-[1px] border-solid border-[#C8C8DB] h-full"></div>
                    <div className="flex text-2xl font-bold flex-col gap-2 justify-center items-center">
                      <span className="text-[#FFFFFF] ">
                        Doanh thu trên lượt phát
                      </span>
                      <span className="text-[#FFAC69]">1.564.745.000đ</span>
                    </div>
                    <div className="w-[1px] border-[1px] border-solid border-[#C8C8DB] h-full"></div>
                    <div className="flex text-2xl font-bold flex-col gap-2 justify-center items-center">
                      <span className="text-[#FFFFFF] ">
                        Doanh thu chưa phân phối
                      </span>
                      <span className="text-[#FFAC69]">164.745.000đ</span>
                    </div>
                    <div className="w-[1px] border-[1px] border-solid border-[#C8C8DB] h-full"></div>
                    <div className="flex text-2xl font-bold flex-col gap-2 justify-center items-center">
                      <span className="text-[#FFFFFF] ">Hành chính phí</span>
                      <span className="text-[#FFAC69]">3.253.000đ</span>
                    </div>
                  </div>
                </div>
                <span className="text-[#FFF9F4] font-bold text-2xl">
                  Biểu đồ theo dõi lượt phát - 29/06/2021
                </span>
                <div className="max-w-[1541px] bg-[#2F2F41] h-[350px] w-full rounded-2xl">
                  <Recharts />
                </div>
              </div>

              <div className="bg-[#2F2F41] w-[112px] h-[110px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                {/* Thêm thiết bị  */}
                <Link to="/revenue/report/detailReport">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-file-pen text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Báo cáo chi tiết
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
