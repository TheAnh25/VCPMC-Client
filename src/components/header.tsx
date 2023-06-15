import React from "react";
import yellowstar from "../assets/images/saovang.png";
import avatar_default from "../assets/images/avartardefault.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);

  console.log(user);

  return (
    <>
      {user ? (
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
              <div className="shrink-0">
                {!user[0]?.avatar ? (
                  <img
                    className="rounded-full object-cover w-full h-full max-w-[2rem] max-h-[2rem]"
                    src={avatar_default}
                    alt=""
                  />
                ) : (
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={user[0]?.avatar}
                    alt=""
                  />
                )}
              </div>
            </Link>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-base text-[#F5F5FF]">
                {user[0]?.first_name} {user[0]?.last_name}
              </span>
              {user[0]?.role ? (
                <span className="font-medium text-[14px] text-[#B65100]">
                  Admin
                </span>
              ) : (
                <span className="font-medium text-[14px] text-[#B65100]">
                  User
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" max-h-[116px] h-full flex gap-6 justify-end items-center pr-[80px]">
          <div className="max-w-[143px] w-full max-h-[40px] h-full border-[1px] border-solid border-[#C8C8DB] text-[#FFFFFF] font-normal text-base flex gap-2 justify-center items-center rounded-lg px-2 py-[10px]">
            <p>Tiếng Việt</p>
            <div className="bg-red-600 rounded-full w-[22px] h-[22px] flex justify-center items-center">
              <img src={yellowstar} alt="" />
            </div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <Link to="/login">
            <div className="flex gap-3 justify-center items-center">
              <div className="border-[1px] border-solid border-[#C8C8DB] rounded-lg px-6 bg-sky-400 py-2">
                <button className="text-[#FFFFFF] font-bold ">Login</button>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
