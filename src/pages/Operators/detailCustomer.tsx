import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import "../../sass/selectedField.scss";
import { Link, useParams } from "react-router-dom";

const DetailCustomer: React.FC = () => {
  const { id } = useParams();
  const [infoUserOperators, setInfoUserOperators] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/users_operator/" + id)
      .then((res) => {
        setInfoUserOperators(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                    Quản lý
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Đơn vị sử dụng
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Chi tiết
                  </p>
                </div>

                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Thông tin người dùng
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thông tin người dùng
              </span>
            </div>

            {/* Cotent Operators  */}
            <div className="flex gap-10 justify-between ">
              {infoUserOperators.map((val: any) => {
                return (
                  <div className=" max-w-[1541px] w-full flex justify-between">
                    {/* Cột 1 */}
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên người dùng:
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[#F5F5FF] font-normal text-base">
                            {val.name}
                          </span>
                        </div>{" "}
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Vai trò:
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[#F5F5FF] font-normal text-base">
                            {val.role}
                          </span>
                        </div>{" "}
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Email:
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[#F5F5FF] font-normal text-base">
                            {val.email}
                          </span>
                        </div>{" "}
                      </div>
                    </div>
                    {/* Cột 2 */}
                    <div className="flex flex-col gap-3 mr-[400px]">
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên đăng nhập:
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[#F5F5FF] font-normal text-base">
                            {val.name_login}
                          </span>
                        </div>{" "}
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Mật khẩu:
                          </span>
                        </div>
                        <div className="">
                          <input
                            readOnly
                            className="text-[#F5F5FF] font-normal text-base outline-none w-full h-full bg-[#1E1E2E]"
                            type="password"
                            value={val.password}
                          />
                        </div>{" "}
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40">
                          <span className="text-[#FFFFFF] font-bold">
                            Trạng thái thiết bị:
                          </span>
                        </div>
                        <div className="">
                          {val.status ? (
                            <span className="text-[#F5F5FF] font-normal text-base">
                              Đã kích hoạt
                            </span>
                          ) : (
                            <span className="text-[#F5F5FF] font-normal text-base">
                              Ngưng kích hoạt
                            </span>
                          )}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="bg-[#2F2F41] h-[110px] hover:cursor-pointer rounded-l-2xl flex flex-col justify-center items-center">
                {/* Thêm Người dùng  */}
                <Link to={`/contract/operators/detail/${id}/info/update`}>
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col px-4 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                    </div>
                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Chỉnh sửa
                    </span>
                  </div>
                </Link>
                {/* Xóa    */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCustomer;
