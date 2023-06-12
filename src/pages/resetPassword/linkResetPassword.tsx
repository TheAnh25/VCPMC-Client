import React from "react";
import mcpmc_logo from "../../assets/images/vcpmc_logo.png";
import yellowstar from "../../assets/images/saovang.png";
import { Link } from "react-router-dom";

const LinkResetPassword = () => {
  return (
    <>
      <div className="bg-[#1E1E2E] ">
        <div className=" min-h-[116px] h-full flex justify-end items-center pr-[80px]">
          <div className="max-w-[143px] w-full max-h-[40px] h-full border-[1px] border-solid border-[#C8C8DB] text-[#FFFFFF] font-normal text-base flex gap-2 justify-center items-center rounded-lg px-2 py-[10px]">
            <p>Tiếng Việt</p>
            <div className="bg-red-600 rounded-full w-[22px] h-[22px] flex justify-center items-center">
              <img src={yellowstar} alt="" />
            </div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[812px]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#FFFFFF]  rounded-full w-[240px] h-[240px]">
                <img src={mcpmc_logo} alt="" />
              </div>
              <div className="text-[#FFFFFF] font-bold text-4xl  mt-10 flex justify-center">
                Khôi phục mật khẩu
              </div>
            </div>
            <div className="mt-4 text-base font-normal text-[#FFFFFF] ml-5">
              Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng
              kiểm tra mail.
            </div>
            <div className=" mt-4 text-base font-normal text-[#FFFFFF] ml-5">
              Click vào đường link được đính kèm trong mail để chuyển đến trang
              đặt lại mật khẩu.{" "}
            </div>
          </div>
          <div className="flex justify-center items-center mt-[50px] mb-[60px]">
            <Link to="/login">
              <span className="text-[#FF7506] underline">
                Quay lại đăng nhập
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkResetPassword;
