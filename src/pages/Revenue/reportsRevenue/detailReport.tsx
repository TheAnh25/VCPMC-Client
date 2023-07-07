import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginations from "../../../components/pagination";
import {
  optionsMonthReport,
  optionsTimeReport,
} from "../../../constants/optionsSelect";
import { Select } from "antd";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

const DetailReport: React.FC = () => {
  const [report, setReport] = useState([]);
  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/revenue_report")
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {report && (
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
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Báo cáo chi tiết
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Doanh thu theo hợp đồng khai thác
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className="flex flex-col gap-6">
                  <div className=" max-w-[1541px] w-full flex flex-col gap-6">
                    <div className="max-w-full flex justify-between">
                      <div className="flex  w-full gap-16">
                        {/* Chọn nhóm tài khoản */}
                        <div>
                          <Select
                            options={optionsTimeReport}
                            defaultValue={optionsTimeReport[0].value}
                            style={{
                              width: 160,
                            }}
                          />
                        </div>
                        {/* Ẩn hiện cột  */}
                        <div>
                          <Select
                            options={optionsMonthReport}
                            defaultValue={optionsMonthReport[0].value}
                            style={{
                              width: 160,
                            }}
                          />
                        </div>
                      </div>
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Nhập tên người dùng"
                          />
                          <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th>Số hợp đồng</th>
                              <th>Đơn vị khai thác</th>
                              <th>Thời hạn hợp đồng</th>
                              <th>Loại hợp đồng</th>
                              <th>Số thiết bị đã đồng bộ</th>
                              <th>Tổng số lượt phát</th>
                              <th>Ngày chốt đối soát</th>
                              <th className="w-24"></th>
                              <th className="w-24"></th>
                            </tr>
                            {report?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center">
                                      {val.number}
                                    </td>
                                    <td className="text-center">
                                      {val.company}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}{" "}
                                      -{" "}
                                      {new Date(
                                        val.end_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center">
                                      {val.category_contract}
                                    </td>
                                    <td className="text-center">
                                      {val.device_synch}
                                    </td>
                                    <td className="text-center">
                                      {val.count_play}
                                    </td>
                                    <td className="text-center">
                                      {new Date(val.date).toLocaleDateString(
                                        "en-GB"
                                      )}
                                    </td>

                                    <td>
                                      <Link
                                        to={`/revenue/report/detailReport/detailrevenue/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Chi tiết doanh thu
                                        </td>
                                      </Link>
                                    </td>
                                    <td>
                                      <Link
                                        to={`/revenue/report/detailReport/synchdevice/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Lịch sử đồng bộ trên thiết bị
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
                </div>

                <div className="bg-[#2F2F41] w-[112px] h-[240px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                  {/* Thêm thiết bị  */}

                  <div>
                    <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      {/* <!-- Button trigger vertically centered modal--> */}
                      <button
                        type="button"
                        className=""
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init
                        tabIndex={-1}
                        data-te-ripple-color="none">
                        <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-file-circle-check text-[#FF7506] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Chốt doanh thu
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* <!--Verically centered modal--> */}
                    <div
                      data-te-modal-init
                      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                      id="exampleModalCenter"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-modal="true"
                      role="dialog">
                      <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#3E3E5B] bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                          {/* <!--Modal body--> */}
                          <div className="relative p-4 flex flex-col items-center justify-center gap-6">
                            <div>
                              <p className="text-[#FFFFFF] text-2xl font-bold ">
                                Chốt doanh thu
                              </p>
                            </div>
                            <div className="w-full flex flex-col gap-5 text-[#FFFFFF] text-base">
                              <span>
                                Doanh thu sẽ được chốt từ ngày 01/05/2021 đến
                                ngày 14/05/2021 trên tất cả các hợp đồng sử
                                dụng.
                              </span>
                              <span>
                                Nhấn Tiếp tục để chốt doanh thu. Nhấn Hủy để hủy
                                bỏ và không chốt doanh thu
                              </span>
                            </div>
                          </div>

                          {/* <!--Modal footer--> */}
                          <div className="flex justify-center items-center gap-8 mb-4">
                            <div className="button-cancel">
                              <button
                                type="button"
                                data-te-modal-dismiss
                                aria-label="Close"
                                className="px-6 py-3 text-[#FF7506]">
                                Hủy
                              </button>
                            </div>

                            <div className="button-primary">
                              <button
                                type="submit"
                                className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                                Tiếp tục
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

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

export default DetailReport;
