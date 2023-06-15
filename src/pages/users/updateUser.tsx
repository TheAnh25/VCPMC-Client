import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";
import { logout } from "../../store/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      toast.success("Logout success!");
      // @ts-ignore
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <>
      {user && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className="bg-[#1E1E2E] w-full">
            <Header />
            <div className="pl-[38px] flex flex-col gap-12">
              <span className="font-bold text-4xl text-[#F5F5FF]">
                Thông tin cơ bản
              </span>
              <div className="flex justify-between">
                <div className="flex gap-[172px]">
                  <div className="">
                    <div className="w-[248px] h-[303px] ml-6  ">
                      <div>
                        <div className="relative shrink-0  ">
                          <img
                            className="rounded-full w-[248px] h-[248px] object-cover"
                            src={user[0]?.avatar}
                            alt=""
                          />
                        </div>
                        <div className="absolute flex items-center justify-center w-[45px] h-[45px] top-[400px] left-[400px] bg-[#1E1E2E] opacity-70 border-[2px] border-solid border-[#FFFFFF] rounded-full">
                          <i className="fa-solid fa-camera text-[#FFFFFF]"></i>
                        </div>
                      </div>
                      <div className=" w-[186px] ml-[31px] h-9 font-semibold text-[20px] flex items-center justify-center text-[#F5F5FF]">
                        <span>
                          {user[0]?.first_name} {user[0]?.last_name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-6">
                      <div className="flex flex-col ">
                        <div className="w-[274px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Họ:
                          </span>
                          <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                            <p className="text-base font-normal text-[#F5F5FF]">
                              {user[0]?.first_name}
                            </p>
                          </div>
                        </div>
                        <div className="w-[274px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Ngày sinh:
                          </span>
                          <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                            <p className="text-base font-normal text-[#F5F5FF]  ">
                              {new Date(user[0]?.birthday).toLocaleDateString(
                                "en-GB"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="w-[274px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Tên:
                          </span>
                          <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                            <p className="text-base font-normal text-[#F5F5FF]  ">
                              {user[0]?.last_name}
                            </p>
                          </div>
                        </div>
                        <div className="w-[274px] h-[76px] mb-8">
                          <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                            Số điện thoại:
                          </span>
                          <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                            <p className="text-base font-normal text-[#F5F5FF]  ">
                              {user[0]?.phone_number}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-[571px] h-[76px] mb-8">
                        <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                          Email:
                        </span>
                        <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                          <p className="text-base font-normal text-[#878890]">
                            {user[0]?.email}
                          </p>
                        </div>
                      </div>
                      <div className="w-[571px] h-[76px] mb-8">
                        <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                          Tên đăng nhập:
                        </span>
                        <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                          <p className="text-base font-normal text-[#878890]">
                            {user[0]?.account_login}
                          </p>
                        </div>
                      </div>
                      <div className="w-[571px] h-[76px] mb-8">
                        <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                          Phân quyền:
                        </span>
                        <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                          {user[0]?.role ? (
                            <p className="text-base font-normal text-[#878890]">
                              Admin
                            </p>
                          ) : (
                            <p className="text-base font-normal text-[#878890]">
                              User
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-8 mr-[192px]">
                <Link to="/users">
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
      )}
    </>
  );
};

export default UpdateUser;
