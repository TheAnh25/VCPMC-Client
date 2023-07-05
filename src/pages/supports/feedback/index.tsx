import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { useAppSelector } from "../../../store/hooks";
import { Select } from "antd";
import { optionsFeedback } from "../../../constants/optionsSelect";
import toast from "react-hot-toast";

const Feedback: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  const handleSuccess = () => {
    toast.success("Gửi feedback thành công");
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
                    Hỗ trợ
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Feedback
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Feedback
              </span>
            </div>

            {/* Cotent Record  */}
            <div className="bg-[#2F2F41B2] rounded-2xl max-w-[764px] min-h-[504px] h-full w-full flex mx-auto gap-6">
              <div className="px-8 py-10 flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2 text-[#FFFFFF] text-xl font-bold">
                  <span>Tên người dùng</span>
                  {user ? (
                    <div>
                      <input
                        readOnly
                        className="rounded-lg w-full bg-[#2B2B3F] px-4 py-[10px] text-[#F5F5FF] outline-none text-base font-normal"
                        type="text"
                        value={user[0]?.first_name + user[0]?.last_name}
                      />
                    </div>
                  ) : (
                    <div>
                      <input
                        readOnly
                        className="rounded-lg w-full bg-[#2B2B3F] px-4 py-[10px] text-[#F5F5FF] outline-none text-base font-normal"
                        type="text"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 text-[#FFFFFF] text-xl font-bold">
                  <span>Bạn muốn được hỗ trợ vấn đề gì?</span>
                  <div>
                    <Select
                      options={optionsFeedback}
                      defaultValue={`Chọn vấn đề bạn cần được hỗ trợ`}
                      style={{
                        width: 700,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-[#FFFFFF] text-xl font-bold">
                  <span>Nội dung</span>
                  <div>
                    <textarea
                      className="rounded-lg text-base font-normal w-full bg-[#2B2B3F] border-none outline-none px-4 py-3"
                      cols={62}
                      rows={6}
                      placeholder="Nhập nội dung"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center  ">
              <div onClick={handleSuccess} className="button-primary">
                <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
