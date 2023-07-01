import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import { Checkbox, DatePicker } from "antd";
import toast from "react-hot-toast";

const ChangeRevenue: React.FC = () => {
  const [isMonth, setIsMonth] = useState(false);
  const [isThreeMonth, setIsThreeMonth] = useState(false);
  const handleIsMonth = () => {
    setIsMonth(!isMonth);
  };
  const handleIsThreeMonth = () => {
    setIsThreeMonth(!isThreeMonth);
  };

  const hanleSubmitChange = () => {
    toast.success("Lưu cài đặt chu kỳ đối soát thành công");
  };

  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className="w-full flex flex-col gap-6">
          <Header />

          <div className="ml-[60px] flex flex-col justify-between max-h-[80vh] h-full">
            <div className="flex flex-col gap-6">
              <div className=" flex flex-col gap-[2px]">
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
                      Chu kì đối soát
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Cài đặt hệ thống
                </span>
              </div>
              <div className="max-w-[1541px] bg-[#2F2F41] h-[572px] w-full rounded-2xl">
                <div className="px-10 py-10 flex flex-col gap-8">
                  <span className="text-[#E5E5E5] text-2xl font-bold">
                    Cài đặt chu kì đối soát
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Checkbox onChange={handleIsThreeMonth} />
                      <span className="text-[#E5E5E5] text-lg font-bold">
                        Đối soát theo quý
                      </span>
                    </div>
                    {isThreeMonth && (
                      <div className="ml-4 flex flex-col gap-2 text-[#FFFFFF] text-base">
                        <div className="flex gap-5">
                          <span className="font-semibold">Quý 1:</span>
                          <span className="font-normal">01/06 - 30/07</span>
                        </div>
                        <div className="flex gap-5">
                          <span className="font-semibold">Quý 2:</span>
                          <span className="font-normal">01/08 - 30/09</span>
                        </div>
                        <div className="flex gap-5">
                          <span className="font-semibold">Quý 3:</span>
                          <span className="font-normal">01/10 - 30/11</span>
                        </div>
                        <div className="flex gap-5">
                          <span className="font-semibold">Quý 4:</span>
                          <span className="font-normal">01/12 - 31/12</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Checkbox onChange={handleIsMonth} />
                      <span className="text-[#E5E5E5] text-lg font-bold">
                        Đối soát theo tháng
                      </span>
                    </div>
                    {isMonth && (
                      <div className="ml-4 flex gap-40 text-[#FFFFFF] text-base">
                        <div className="flex gap-5">
                          <span className="font-semibold">Ngày bắt đầu:</span>
                          <div>
                            <DatePicker
                              placeholder="yy/mm/dd"
                              className="w-[197px] h-full bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                            />
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <span className="font-semibold">Ngày kết thúc:</span>
                          <div>
                            <DatePicker
                              placeholder="yy/mm/dd"
                              className="w-[197px] h-full bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 ">
              <div onClick={hanleSubmitChange} className="button-primary">
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

export default ChangeRevenue;
