import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { optionsCountry } from "../../../constants/optionsSelect";
import { Select } from "antd";
import systemImage1 from "../../../assets/images/systemImage1.png";
import Paginations from "../../../components/pagination";
import { Link } from "react-router-dom";
import axios from "axios";

const Infocategory: React.FC = () => {
  const [infocategory, setInfocategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4444/category_record")
      .then((res) => {
        setInfocategory(res.data);
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
                    Cài đặt
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Cài đặt hệ thống
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thông tin tác phẩm
              </span>
            </div>
            <span className="text-[#FFFFFF] text-2xl font-bold">
              Thể loại tác phẩm
            </span>

            {/* Cotent   */}
            <div className="flex gap-10 justify-between ">
              <div className=" max-w-[1541px] w-full flex flex-col gap-6">
                <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                  {/* Table List Record */}
                  <div className="w-full shrink-0 flex ">
                    <thead>
                      <table className="shadow-lg w-full table-fixed tab">
                        <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                          <th className="w-16">STT</th>
                          <th className="w-40">Tên thể loại</th>
                          <th>Mô tả</th>
                        </tr>
                        {infocategory?.map((val: any) => {
                          return (
                            <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                              <tr
                                key={val.id}
                                className="text[#535261] text-[14px] font-normal ">
                                <td className="text-center py-3 ">{val.id}</td>
                                <td className="text-center">{val.name}</td>
                                <td className="">{val.description}</td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </thead>
                  </div>
                  {/* Pagination  */}
                  <div className=" flex justify-between px-6 mb-4">
                    <div className="flex gap-2 text-[#F5F5FF] items-center">
                      <span>Hiển thị </span>
                      <div className="border-[1px] border-solid border-[#FF7506] rounded">
                        <span className="px-4 py-2"> 12 </span>
                      </div>
                      <span>hàng trong mỗi trang </span>
                    </div>
                    <div>
                      <Paginations />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2F2F41] w-[112px] h-[110px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                {/* Chỉnh sửa  */}
                <Link to="/setting/infocategory/update">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Chỉnh sửa
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

export default Infocategory;
