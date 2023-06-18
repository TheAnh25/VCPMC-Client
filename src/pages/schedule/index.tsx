import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/schedule")
      .then((res) => {
        setSchedule(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {schedule && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Danh sách lịch phát
              </span>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className=" max-w-[1541px] w-full flex-col gap-6">
                  <div className="bg-[#2F2F41] flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                    {/* Table List Record */}
                    <div className="w-full shrink-0 flex ">
                      <thead>
                        <table className="shadow-lg w-full table-fixed tab">
                          <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                            <th className="w-16">STT</th>
                            <th className="w-[350px]">Tên lịch</th>
                            <th>Thời gian pháti</th>

                            <th className="w-24"></th>
                            <th className="w-24"></th>
                          </tr>
                          {schedule?.map((val: any) => {
                            return (
                              <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                <tr
                                  key={val.id}
                                  className="text[#535261] text-[14px] font-normal ">
                                  <td className="text-center py-3 ">
                                    {val.id}
                                  </td>
                                  <td className="text-center  ">
                                    {val.name_schedule}
                                  </td>
                                  <td className="text-center  ">
                                    {new Date(
                                      val.start_date
                                    ).toLocaleDateString("en-GB")}
                                    -{" "}
                                    {new Date(val.end_date).toLocaleDateString(
                                      "en-GB"
                                    )}
                                  </td>

                                  <td>
                                    <Link to={`/schedule/detail/${val.id}`}>
                                      <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                        Xem chi tiết
                                      </td>
                                    </Link>
                                  </td>
                                  <td>
                                    <td className=" flex justify-center  text-[#FF4747] text-xs font-semibold">
                                      Xóa
                                    </td>
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
                <Link to="/playlist/addPlaylist">
                  <div className="bg-[#2F2F41] px-4 h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-circle-plus text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Thêm lịch phát
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Schedule;
