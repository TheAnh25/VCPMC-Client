import React from "react";
import yellowstar from "../assets/images/saovang.png";
import avatar_default from "../assets/images/avartardefault.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" max-h-[116px] h-full flex gap-6 justify-end items-center pr-[80px]">
        <div className="max-w-[143px] w-full max-h-[40px] h-full border-[1px] border-solid border-[#C8C8DB] text-[#FFFFFF] font-normal text-base flex gap-2 justify-center items-center rounded-lg px-2 py-[10px]">
          <p>Tiếng Việt</p>
          <div className="bg-red-600 rounded-full w-[22px] h-[22px] flex justify-center items-center">
            <img src={yellowstar} alt="" />
          </div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Link to="/users">
            <div className="w-10 h-10  ">
              <img
                className="object-cover rounded-full"
                src={avatar_default}
                alt=""
              />
            </div>
          </Link>
          <div className="flex flex-col gap-[2px]">
            <span className="font-semibold text-base text-[#F5F5FF]">
              Ng.Tuyết
            </span>
            <span className="font-medium text-[14px] text-[#B65100]">
              Admin
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
