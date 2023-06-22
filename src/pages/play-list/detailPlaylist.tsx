import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import Loading from "../../components/loading";

const DetailPlaylist: React.FC = () => {
  const { id } = useParams();
  const [detailPlaylist, setDetailPlaylist] = useState([]);
  const [nameRecord, setNameRecord] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4444/playlist/" + id)
      .then((res) => {
        setDetailPlaylist(res.data);
        setNameRecord(res.data[0].name_record);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {detailPlaylist && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Playlist
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Chi tiết playlist
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Playlist - {nameRecord}
                </span>
              </div>

              {/* Cotent Record  */}
              {detailPlaylist?.map((val: any) => {
                return (
                  <div className="flex gap-10 justify-between ">
                    <div className=" max-w-[1540px] w-full flex gap-6">
                      <div className="min-w-[274px] w-full flex flex-col gap-1">
                        <div className="shrink-0">
                          <img
                            className="w-full object-cover rounded-lg"
                            src={val.thumbnail_playlist}
                            alt=""
                          />
                        </div>

                        <span className="text-[#FFF9F4] text-2xl font-bold">
                          {val.name_playlist}
                        </span>

                        <div className="border-[1px] border-solid border-[#727288]"></div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                            Người tạo:{" "}
                            <span className="font-normal text-[#595965]">
                              {val.approve_auth}
                            </span>
                          </span>
                          <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                            Tổng số:{" "}
                            <span className="font-normal text-[#595965]">
                              {val.count_record} bản ghi
                            </span>
                          </span>
                          <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                            Tổng thời lượng:{" "}
                            <span className="font-normal text-[#595965]">
                              {val.duration_playlist}
                            </span>
                          </span>
                        </div>
                        <div className="border-[1px] border-solid border-[#727288]"></div>
                        <span className="text-[#595965] text-base font-normal">
                          {val.description_playlist}
                        </span>
                        <div className="border-[1px] border-solid border-[#727288]"></div>
                        <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                          Chủ đề:{" "}
                          <span className="font-normal text-[#595965]">
                            {val.title_playlist}
                          </span>
                        </span>
                        <div className="border-[1px] border-solid border-[#727288]"></div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-3 items-center text-[#878890]">
                            <i className="fa-solid fa-earth-americas ]"></i>
                            <span className=" font-normal">
                              {" "}
                              Hiển thị ở chế độ công khai
                            </span>
                          </div>
                          <div className="flex gap-3 items-center text-[#FF7506]">
                            <i className="fa-solid fa-shuffle"></i>
                            <span className=" font-normal">
                              {" "}
                              Phát ngẫu nhiên
                            </span>
                          </div>
                          <div className="flex gap-3 items-center text-[#FFFFFF]">
                            <i className="fa-solid fa-repeat"></i>
                            <span className=" font-normal"> Lặp lại</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#2F2F41]  flex flex-col justify-between gap-[50px]  rounded-2xl">
                        {/* Table List Record */}
                        <div className="w-full shrink-0 flex ">
                          <thead>
                            <table className="shadow-lg w-full table-fixed tab">
                              <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                                <th className="w-16">STT</th>
                                <th>Tên bản ghi</th>
                                <th>Ca sĩ</th>
                                <th>Tác giả</th>

                                <th className="w-20"></th>
                                <th className="w-20"></th>
                              </tr>
                              {detailPlaylist?.map((val: any) => {
                                return (
                                  <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                    <tr
                                      key={val.id}
                                      className="text[#535261] text-[14px] font-normal ">
                                      <td className="text-center py-3 ">1</td>
                                      <td className="text-center  ">
                                        <div className="flex flex-col">
                                          <span>{val.name_record}</span>
                                          <div className="flex justify-center gap-1 items-center">
                                            <span>{val.category}</span>
                                            <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                            <span>{val.format}</span>
                                            <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                            <span>{val.duration}</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="text-center  ">
                                        {val.singer_record}
                                      </td>
                                      <td className="text-center  ">
                                        {val.auth_record}
                                      </td>

                                      <td>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Nghe
                                        </td>
                                      </td>
                                      <td>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Gỡ
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
                    <div className="bg-[#2F2F41] h-[230px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <Link to={`/playlist/detail/${val.id}/update`}>
                        <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Chỉnh sửa
                          </span>
                        </div>
                      </Link>
                      <div>
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-trash text-[#FF4747] text-2xl font-bold"></i>
                        </div>
                        <div className="text-center">
                          <span className="text-[#FFFFFF] font-medium text-xs">
                            Xóa Playlist
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPlaylist;
