import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Paginations from "../../../components/pagination";
import { DatePicker, Select } from "antd";
import { optionsMonthReport } from "../../../constants/optionsSelect";

const Distributor: React.FC = () => {
  const [distributor, setDistributor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/revenue_report")
      .then((res) => {
        setDistributor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {distributor && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Doanh thu
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Phân phối doanh thu
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Quản lý phân phối doanh thu
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <span className="text-[#FFFFFF] text-base font-semibold">
                        Theo tháng:
                      </span>
                      <div>
                        <DatePicker
                          placeholder="yy/mm/dd"
                          className="w-[197px] h-full bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                        />
                      </div>
                    </div>
                    <div className="max-w-[517px] w-full">
                      <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                        <input
                          className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                          placeholder="Nhập tên bài hát"
                        />
                        <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                      </div>
                    </div>
                  </div>

                  <span className="text-2xl text-[#E5E5E5] font-bold">
                    Danh sách hợp đồng ủy quyền
                  </span>
                  {/* table device  */}
                  <div className="bg-[#2F2F41] h-[472px] flex flex-col justify-between gap-[50px] rounded-2xl">
                    {/* Table List Record */}
                    <div className="w-full shrink-0 flex ">
                      <thead>
                        <table className="shadow-lg w-full table-fixed tab">
                          <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                            <th className="w-16">STT</th>
                            <th>Hợp đồng ủy quyền</th>
                            <th>Người ủy quyền</th>
                            <th>Số bài hát ủy quyền</th>
                            <th>Doanh thu (VNĐ)</th>
                            <th>Hành chính phí (VNĐ)</th>
                            <th>Mức nhuận bút (VNĐ)</th>
                            <th>Ngày chốt đối soát</th>
                            <th>Chi tiết doanh thu</th>
                          </tr>
                          {distributor?.map((val: any) => {
                            return (
                              <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                <tr
                                  key={val.id}
                                  className="text[#535261] text-[14px] font-normal ">
                                  <td className="text-center py-3 ">
                                    {val.id}
                                  </td>
                                  <td className="text-center">{val.number}</td>
                                  <td className="text-center">
                                    {val.authorized}
                                  </td>
                                  <td className="text-center">
                                    {val.count_record}
                                  </td>
                                  <td className="text-center">
                                    {val.value_date}
                                  </td>
                                  <td className="text-center">
                                    {val.value_date}
                                  </td>
                                  <td className="text-center">
                                    {val.value_date}
                                  </td>
                                  <td className="text-center">
                                    {new Date(val.date).toLocaleDateString(
                                      "en-GB"
                                    )}
                                  </td>
                                  <td>
                                    <Link
                                      to={`/revenue/distributor/detail/${val.id}`}>
                                      <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                        Xem chi tiết
                                      </td>
                                    </Link>
                                  </td>
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

                <div className="bg-[#2F2F41] w-[112px] h-[120px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-file-export text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Xuất dữ liệu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Distributor;
