import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Paginations from "../../../components/pagination";
import { DatePicker } from "antd";

const DetailRevenue: React.FC = () => {
  const { id } = useParams();
  const [detailRevenue, setDetailRevenue] = useState([]);
  const [records, setRecords] = useState([]);
  const [numberContract, setNumberContract] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4444/revenue_report/" + id)
      .then((res) => {
        setDetailRevenue(res.data);
        setNumberContract(res.data[0].number);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:4444/records")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {detailRevenue && (
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
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Báo cáo doanh thu
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Báo cáo chi tiết
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Chi tiết doanh thu
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Hợp đồng {numberContract}
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                {detailRevenue.map((val: any) => {
                  return (
                    <div className="flex gap-6">
                      <div className=" flex flex-col gap-6 min-w-[571px] w-full">
                        <div className="bg-[#2B2B3F] rounded-2xl">
                          <div className="flex flex-col gap-2 px-6 py-6 ">
                            <span className="text-[#FF7506] text-2xl font-bold">
                              Thông tin hợp đồng
                            </span>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Số hợp đồng:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.number}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Đơn vị khai thác:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.company}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Loại hợp đồng:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.category_contract}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Hiệu lực từ:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {new Date(val.start_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Ngày hết hạn:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {new Date(val.end_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Giá trị hợp đồng:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.value}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Giá trị phân phối theo ngày:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.value_date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#2B2B3F] rounded-2xl">
                          <div className="flex flex-col gap-2 px-6 py-6 ">
                            <span className="text-[#FF7506] text-2xl font-bold">
                              Thông tin đối soát
                            </span>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Ký đối soát:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {new Date(val.date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Số bài hát:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.count_record} bài
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Tổng số lượt phát:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.count_play} lượt
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Tổng doanh thu:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  300.000.000 VNĐ
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Doanh thu chưa phân phối:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  1.000.000 VNĐ
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-56">
                                <span className="text-[#FFFFFF] font-bold">
                                  Trạng thái đối soát:
                                </span>
                              </div>
                              <div>
                                {val.status_test ? (
                                  <span className="text-[#F5F5FF] font-normal text-base">
                                    Đã đối soát
                                  </span>
                                ) : (
                                  <span className="text-[#F5F5FF] font-normal text-base">
                                    Chưa đối soát
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <span className="text-2xl font-bold text-[#E5E5E5]">
                          Danh sách bản ghi
                        </span>
                        <div className="max-w-full flex justify-between">
                          <div className="flex w-full gap-16">
                            <div className="flex gap-4 items-center">
                              <span className="text-[#FFFFFF] text-base font-bold">
                                Xem theo ngày/tuần:
                              </span>
                              <div>
                                <DatePicker
                                  placeholder="yy/mm/dd"
                                  className="w-[197px] h-full bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Tìm kiếm  */}
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
                        <div className="bg-[#2F2F41] h-full flex flex-col justify-between gap-[50px]  rounded-2xl">
                          {/* Table List Record */}
                          <div className="w-full  shrink-0 flex ">
                            <thead>
                              <table className="shadow-lg w-full table-fixed tab">
                                <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                                  <th className="w-16">STT</th>
                                  <th>Tên bài hát</th>
                                  <th>Tổng lượt phát</th>
                                  <th>Tổng doanh thu</th>
                                  <th>Quyền biểu diễn</th>
                                  <th>Quyền sản xuất</th>
                                  <th>VCPMC</th>
                                </tr>
                                {records?.map((val: any) => {
                                  return (
                                    <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                      <tr
                                        key={val.id}
                                        className="text[#535261] text-[14px] font-normal ">
                                        <td className="text-center py-3 ">
                                          {val.id}
                                        </td>
                                        <td className="text-center">
                                          {val.name_record}
                                        </td>
                                        <td className="text-center">
                                          {val.count_play}
                                        </td>
                                        <td className="text-center">
                                          {val.revenue}
                                        </td>
                                        <td className="text-center">
                                          {val.action}
                                        </td>
                                        <td className="text-center">
                                          {val.production}
                                        </td>{" "}
                                        <td className="text-center">
                                          {val.vcpmc}
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
                    </div>
                  );
                })}

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

export default DetailRevenue;
