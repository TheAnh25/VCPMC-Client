import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paginations from "../../../components/pagination";

const SynchDevice: React.FC = () => {
  const { id } = useParams();
  const [detailRevenue, setDetailRevenue] = useState([]);
  const [records, setRecords] = useState([]);
  const [devices, setDevices] = useState([]);
  const [numberContract, setNumberContract] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4444/revenue_report/" + id)
      .then((res) => {
        setNumberContract(res.data[0].number);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4444/devices/")
      .then((res) => {
        setDevices(res.data);
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
                      Lịch sử đồng bộ thiết bị
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Hợp đồng {numberContract}
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className="flex flex-col gap-6">
                  <span className="text-[#FFF9F4] text-2xl font-bold">
                    Danh sách thiết bị
                  </span>
                  <div className="max-w-[517px] w-full">
                    <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                      <input
                        className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                        placeholder="Nhập tên thiết bị"
                      />
                      <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex gap-7">
                      <div className="w-56">
                        <span className="text-[#FFFFFF] font-bold">
                          Tổng thiết bị:
                        </span>
                      </div>
                      <div>
                        <span className="text-[#F5F5FF] font-normal text-base">
                          3 thiết bị
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-7">
                      <div className="w-56">
                        <span className="text-[#FFFFFF] font-bold">
                          Tổng lượt phát:
                        </span>
                      </div>
                      <div>
                        <span className="text-[#F5F5FF] font-normal text-base">
                          784
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    {/* table device  */}
                    <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-full rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th>Tên thiết bị</th>
                              <th>Trạng thái</th>
                              <th>Thời gian đồng bộ dữ liệu</th>
                              <th>Tống số lượt phát</th>
                            </tr>
                            {devices?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center">
                                      {val.name_device}
                                    </td>
                                    <td className="text-center">
                                      {val.status ? (
                                        <div className=" flex items-center gap-1 text-[#FFFFFF]">
                                          <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                                          <p>Đang hoạt động </p>
                                        </div>
                                      ) : (
                                        <div className=" flex items-center gap-1 text-[#FFFFFF]">
                                          <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                          <p>Không hoạt động </p>
                                        </div>
                                      )}
                                    </td>

                                    <td className="text-center">
                                      {new Date(
                                        val.date_contract
                                      ).toLocaleDateString("en-GB")}
                                    </td>

                                    <td className="text-center">
                                      {val.count_play}
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
                    {/* table record  */}
                    <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-full rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th>Danh sách bài hát</th>
                              <th>Số lượt phát</th>
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

export default SynchDevice;
