import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";
import { logout } from "../../store/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { user } = useAppSelector((state) => state.user);

  //   const [oldPassword, setOldPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/users");
    toast.success("Đổi mật khẩu thành công!");
  };

  return (
    <>
      {user && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className="bg-[#1E1E2E] w-full">
            <Header />
            <div className="pl-[38px] flex flex-col gap-12 ">
              <span className="text-[#F5F5FF] font-bold text-2xl flex justify-center">
                Thay đổi mật khẩu
              </span>
              <form onSubmit={handleSubmitChangePassword}>
                <div className="flex justify-center">
                  <div className="flex gap-[172px]">
                    <div>
                      <div>
                        <div className="w-[571px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Mật khẩu hiện tại:
                          </span>
                          <div className="flex flex-row items-center w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                            <input
                              className="text-base font-normal text-[#878890] bg-[#2B2B3F] rounded-md px-4 outline-none w-full h-full"
                              type="password"
                              // value={user[0]?.password}
                              placeholder="Nhập mật khẩu hiện tại"
                            />
                          </div>
                        </div>
                        <div className="w-[571px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Mật khẩu mới:
                          </span>
                          <div className="flex flex-row items-center w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                            <input
                              className="text-base font-normal text-[#878890] bg-[#2B2B3F] rounded-md px-4 outline-none w-full h-full"
                              type="password"
                              // value={user[0]?.password}
                              placeholder="Nhập mật khẩu mới"
                            />
                          </div>
                        </div>
                        <div className="w-[571px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Nhập lại mật khẩu mới:
                          </span>
                          <div className="flex flex-row items-center w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                            <input
                              className="text-base font-normal text-[#878890] bg-[#2B2B3F] rounded-md px-4 outline-none w-full h-full"
                              type="password"
                              // value={user[0]?.password}
                              placeholder="Nhập lại mật khẩu mới"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-8">
                  <Link to="/users">
                    <div className="button-cancel">
                      <button className="px-6 py-3 text-[#FF7506]">Hủy</button>
                    </div>
                  </Link>
                  <div className="button-primary">
                    <button
                      type="submit"
                      className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                      Lưu
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
