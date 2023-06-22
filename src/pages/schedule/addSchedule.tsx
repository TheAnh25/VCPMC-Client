import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import DatePickerComponent from "../../components/datePicker";
import axios from "axios";
import CalendarComponent from "../../components/calendar";

const AddSchedule: React.FC = () => {
  const [nameSchedule, setNameSchedule] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/playlist")
      .then((res) => {
        setPlaylist(res.data);
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
                    Lập lịch phát
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Thêm lịch phát mới
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Lập lịch phát
              </span>
            </div>

            {/* Cotent Record  */}
            <div className="flex gap-10 justify-between ">
              <div className="flex flex-col gap-6">
                <div className="w-full flex gap-6">
                  <div className="min-w-[274px] flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-1  px-4 py-4 bg-[#2F2F41B2] rounded-2xl">
                      <span className="text-[#FFF9F4] text-lg font-bold">
                        Thông tin lịch phát
                      </span>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-[#AEAEAE] text-base font-semibold">
                            Tên lịch phát:
                          </span>
                        </div>
                        <div>
                          <input
                            className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                            type="text"
                            value={nameSchedule}
                            onChange={(e) => setNameSchedule(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-[#AEAEAE] text-base font-semibold">
                            Từ ngày
                          </span>
                        </div>
                        <div>
                          <DatePickerComponent />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-[#AEAEAE] text-base font-semibold">
                            Đến ngày
                          </span>
                        </div>
                        <div>
                          <DatePickerComponent />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 px-4 py-4 bg-[#2F2F41B2] rounded-2xl">
                      <span className="text-[#FFF9F4] text-lg font-bold">
                        Danh sách Playlist
                      </span>
                      {playlist?.map((val: any) => {
                        return (
                          <div className="bg-[#33334D] mb-2 px-4 py-2 flex flex-col gap-1 rounded-lg">
                            <span className="text-[#FFAC69] text-base font-semibold">
                              {val.name_playlist}
                            </span>
                            <div className="flex justify-between">
                              <span className="text-[#FFFFFF]  text-sm font-bold">
                                Thời lượng:{" "}
                              </span>
                              <span className="text-[#AEAEAE] text-sm font-normal">
                                {val.duration_playlist}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-[#2F2F41B2] rounded-2xl w-full">
                    <CalendarComponent />
                  </div>
                </div>
                <div className="flex justify-center items-center gap-8  mt-10">
                  <Link to="/schedule">
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
              <Link to="/schedule/add/devices">
                <div className="bg-[#2F2F41] px-4 h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                    <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                  </div>

                  <span className="text-[#FFFFFF] w-[52px] text-center font-medium text-xs">
                    Áp lịch cho thiết bị
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSchedule;
