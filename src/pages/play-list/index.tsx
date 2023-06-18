import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";

const Playlist: React.FC = () => {
  const [playlist, setPlaylist] = useState([]);
  const [isTable, setIsTable] = useState<boolean>(true);
  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };

  console.log(playlist);
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
      {playlist && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Playlist
              </span>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className=" max-w-[1541px] w-full flex-col gap-6">
                  <div className="max-w-full flex justify-between">
                    <div className="max-w-[517px] w-full mr-[104px]">
                      <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                        <input
                          className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                          placeholder="Tên chủ đề, người tạo,..."
                        />
                        <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                      </div>
                    </div>
                    <div className=" flex gap-6 items-center">
                      <div
                        onClick={handleClickIsTable}
                        className="cursor-pointer">
                        {isTable ? (
                          <i className="fa-solid fa-list text-3xl text-[#FF7506]"></i>
                        ) : (
                          <i className="fa-solid fa-list text-3xl text-[#AEAEAE]"></i>
                        )}
                      </div>
                      <div
                        onClick={handleClickIsNotTable}
                        className="cursor-pointer">
                        {isTable ? (
                          <i className="fa-solid fa-table text-3xl text-[#AEAEAE]"></i>
                        ) : (
                          <i className="fa-solid fa-table text-3xl text-[#FF7506]"></i>
                        )}
                      </div>
                    </div>
                  </div>
                  {isTable ? (
                    <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th className="w-[350px]">Tiêu đề</th>
                              <th>Số bản ghi</th>
                              <th>Thời lượng</th>
                              <th className="w-[350px]">Chủ đề</th>
                              <th>Ngày tạo</th>
                              <th>Người tạo</th>

                              <th></th>
                            </tr>
                            {playlist?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center  ">
                                      {val.name_playlist}
                                    </td>
                                    <td className="text-center  ">
                                      {val.count_record}
                                    </td>
                                    <td className="text-center  ">
                                      {val.duration_playlist}
                                    </td>

                                    <td className="text-center  ">
                                      {val.title_playlist}
                                    </td>
                                    <td className="text-center  ">
                                      {new Date(
                                        val.start_time
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center  ">
                                      {val.auth_playlist}
                                    </td>

                                    <td>
                                      <Link to={`/playlist/detail/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Chi tiết
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
                  ) : (
                    <div className=" mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="grid grid-cols-4">
                        {playlist?.map((val: any) => {
                          return (
                            <div className="">
                              <div
                                key={val.id}
                                className="bg-[#393955B2] rounded-lg w-[342px] flex flex-col gap-2">
                                <div className="w-full">
                                  <img
                                    className=" w-full rounded-t-lg h-[156px] object-cover"
                                    src={val.thumbnail_playlist}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {/* Thông tin  */}
                                  <div className="flex flex-col gap-1 px-4">
                                    <div className="flex flex-col gap-[2px]">
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        {val.name_playlist}
                                      </span>

                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Chủ đề:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {val.title_playlist}
                                        </span>
                                      </span>
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Người tạo:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {val.auth_playlist}
                                        </span>
                                      </span>
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Ngày tạo:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {new Date(
                                            val.start_time
                                          ).toLocaleDateString("en-GB")}
                                        </span>
                                      </span>
                                    </div>
                                    <div className=" flex justify-between mb-2">
                                      <div className=" flex gap-2">
                                        <div className="border-[1px] border-solid border-[#727288] rounded-md px-3 py-1 flex flex-col justify-center items-center">
                                          <p className="text-[#727288] font-bold text-[8px]">
                                            Số bản ghi
                                          </p>
                                          <p className="text-[#F5F5FF] text-xs font-medium">
                                            {val.count_record}
                                          </p>
                                        </div>
                                        <div className="border-[1px] border-solid border-[#727288] rounded-md px-3 py-1 flex flex-col justify-center items-center">
                                          <p className="text-[#727288] font-bold text-[8px]">
                                            Thời lượng
                                          </p>
                                          <p className="text-[#F5F5FF] text-xs font-medium">
                                            {val.duration_playlist}
                                          </p>
                                        </div>
                                      </div>
                                      <Link to={`/playlist/detail/${val.id}`}>
                                        <div>
                                          <i className="fa-solid fa-circle-info text-[#FF7506] text-2xl font-bold"></i>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  {/* Thể loại */}
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                  )}
                </div>
                <Link to="/playlist/addPlaylist">
                  <div className="bg-[#2F2F41] px-4 h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-circle-plus text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Thêm Playlist
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

export default Playlist;
