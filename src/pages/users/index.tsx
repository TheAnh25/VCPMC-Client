import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import avatarTest from "../../assets/images/avartardefault.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";
import { logout } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("aaa");
    if (user) {
      toast.success("Logout success!");
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <>
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
                      <div className="relative w-[248px] h-[248px] ">
                        <img
                          className="rounded-full h-[248px] object-cover"
                          src={avatarTest}
                          alt=""
                        />
                      </div>
                      <div className="absolute flex items-center justify-center w-[45px] h-[45px] top-[400px] left-[400px] bg-[#1E1E2E] opacity-70 border-[2px] border-solid border-[#FFFFFF] rounded-full">
                        <i className="fa-solid fa-camera text-[#FFFFFF]"></i>
                      </div>
                    </div>
                    <div className=" w-[186px] ml-[31px] h-9 font-semibold text-[20px] flex items-center justify-center text-[#F5F5FF]">
                      <span>Tuyết Nguyễn</span>
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
                          <p className="text-base font-normal text-[#F5F5FF]  ">
                            Nguyễn
                          </p>
                        </div>
                      </div>
                      <div className="w-[274px] h-[76px] mb-8">
                        <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                          Ngày sinh:
                        </span>
                        <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                          <p className="text-base font-normal text-[#F5F5FF]  ">
                            02/02/1998
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
                            Tuyết
                          </p>
                        </div>
                      </div>
                      <div className="w-[274px] h-[76px] mb-8">
                        <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                          Số điện thoại:
                        </span>
                        <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#2B2B3F] rounded-md mt-2">
                          <p className="text-base font-normal text-[#F5F5FF]  ">
                            +84 250 123 151
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
                          tuyetnguyenngoc@alta.com.vn
                        </p>
                      </div>
                    </div>
                    <div className="w-[571px] h-[76px] mb-8">
                      <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                        Tên đăng nhập:
                      </span>
                      <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                        <p className="text-base font-normal text-[#878890]">
                          tuyetnguyenngoc@alta.com.vn
                        </p>
                      </div>
                    </div>
                    <div className="w-[571px] h-[76px] mb-8">
                      <span className="w-full h-6 font-semibold text-base text-[#FFFFFF] mb-2">
                        Phân quyền:
                      </span>
                      <div className="flex flex-row items-center py-3 px-4 w-full h-11 bg-[#3E3E50] rounded-md mt-2">
                        <p className="text-base font-normal text-[#878890]">
                          Admin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F2F41] w-[110px] rounded-l-lg max-h-[372px] h-full">
                <div className="flex flex-col justify-center items-center mt-4 mb-4 gap-[10px]">
                  <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#727288]  rounded-full">
                    <i className="fa-solid fa-pen-to-square text-[#FF7506] font-semibold"></i>
                  </div>
                  <span className="text-[#FFFFFF] text-xs font-medium">
                    Sửa thông tin
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center mt-10 mb-10 gap-[10px]">
                  <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#727288]  rounded-full">
                    <i className="fa-solid fa-unlock-keyhole text-[#FF7506] font-semibold"></i>
                  </div>
                  <span className="text-[#FFFFFF] text-xs font-medium">
                    Đổi mật khẩu
                  </span>
                </div>
                <form
                  className="flex justify-center items-center"
                  onSubmit={handleSubmitLogout}>
                  <button type="submit">
                    <div className="flex flex-col justify-center items-center my-4 gap-[10px]">
                      <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#727288] rounded-full">
                        <i className="fa-regular fa-arrow-right-from-bracket text-[#FF7506] font-bold"></i>
                      </div>
                      <span className="text-[#FFFFFF] text-xs font-medium">
                        Đăng xuất
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
