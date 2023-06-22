import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import { Select } from "antd";
import {
  optionsCategory,
  optionsFormat,
  optionsPlaylist,
} from "../../constants/optionsSelect";

const AddRecordPlaylist: React.FC = () => {
  const { id } = useParams();

  const [detailPlaylist, setDetailPlaylist] = useState([]);
  const [nameRecord, setNameRecord] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/playlist/" + id)
      .then((res) => {
        setDetailPlaylist(res.data);
        setNameRecord(res.data[0].name_record);
        setValuesPlaylist({
          ...valuesPlaylist,
          namePlaylist: res.data[0].name_playlist,
          descriptionPlaylist: res.data[0].description_playlist,
          titlePlaylist: res.data[0].title_playlist,
        });
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

  const [valuesPlaylist, setValuesPlaylist] = useState({
    namePlaylist: "",
    descriptionPlaylist: "",
    titlePlaylist: "",
  });

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
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Chi tiết playlist
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Chỉnh sửa
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Playlist - {nameRecord}
                </span>
              </div>

              {/* Cotent Record  */}
              {detailPlaylist.map((val: any) => {
                return (
                  <div className="flex gap-10 justify-between ">
                    <div className="max-w-[1540px] w-full flex gap-6">
                      <div className="flex flex-col justify-between gap-10">
                        <div className=" h-full flex rounded-2xl gap-10">
                          {/* Kho bản ghi  */}
                          <div className="w-full bg-[#2F2F41] rounded-2xl px-6 py-4">
                            {/* Table List Record */}
                            <div className="flex flex-col gap-4">
                              <span className="text-[#FFFFFF] text-[18px] font-bold">
                                Kho bản ghi
                              </span>
                              <div className="flex gap-16">
                                <div className=" flex gap-4 items-center">
                                  <span className="font-semibold text-base text-[#AEAEAE]">
                                    Thể loại
                                  </span>
                                  <div>
                                    <Select
                                      options={optionsCategory}
                                      defaultValue={optionsCategory[0].value}
                                    />
                                  </div>
                                </div>
                                <div className=" flex gap-4 items-center">
                                  <span className="font-semibold text-base text-[#AEAEAE]">
                                    Playlist mẫu
                                  </span>
                                  <div>
                                    <Select
                                      options={optionsPlaylist}
                                      defaultValue={`Playlist mẫu`}
                                      style={{
                                        width: 250,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="max-w-[517px] w-full">
                                <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                                  <input
                                    className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                                    placeholder="Tên chủ đề, người tạo,..."
                                  />
                                  <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                                </div>
                              </div>
                              <div className="w-full h-[350px] shrink-0 flex ">
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
                                    {records?.map((val: any) => {
                                      return (
                                        <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                          <tr
                                            key={val.id}
                                            className="text[#535261] text-[14px] font-normal ">
                                            <td className="text-center py-3 ">
                                              {val.id}
                                            </td>
                                            <td className="text-center  ">
                                              <div className="flex flex-col">
                                                <span className="text-[#FFFFFF] font-normal text-sm">
                                                  {val.name_record}
                                                </span>
                                                <div className="flex justify-center gap-1 items-center text-[#FFFFFF] font-normal text-xs">
                                                  <span>{val.category}</span>
                                                  <i className="fa-solid fa-circle text-[4px] text-[#347AFF]"></i>
                                                  <span>{val.format}</span>
                                                  <i className="fa-solid fa-circle text-[4px] text-[#347AFF]"></i>
                                                  <span>{val.duration}</span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="text-center  ">
                                              {val.singer}
                                            </td>
                                            <td className="text-center  ">
                                              {val.auth}
                                            </td>

                                            <td>
                                              <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                                Nghe
                                              </td>
                                            </td>
                                            <td>
                                              <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                                Thêm
                                              </td>
                                            </td>
                                          </tr>
                                        </tbody>
                                      );
                                    })}
                                  </table>
                                </thead>
                              </div>
                            </div>
                            {/* Pagination  */}
                            <div className=" flex justify-between px-6 mb-4">
                              <div className="flex gap-2 text-[#F5F5FF] items-center">
                                <span>Hiển thị </span>
                                <div className="border-[1px] border-solid border-[#FF7506] rounded">
                                  <span className="px-4 py-2"> 8 </span>
                                </div>
                                <span>hàng trong mỗi trang </span>
                              </div>
                              <div>
                                <Paginations />
                              </div>
                            </div>
                          </div>
                          {/* Danh sách bản ghi được thêm vào Playlist */}
                          <div className="w-full bg-[#2F2F41] rounded-2xl px-6 py-4">
                            <div className="flex flex-col gap-4">
                              <span className="text-[#FFFFFF] text-[18px] font-bold">
                                Danh sách bản ghi được thêm vào Playlist
                              </span>
                              <div className="flex gap-16">
                                <div className=" flex gap-4 items-center">
                                  <span className="font-semibold text-base text-[#AEAEAE]">
                                    Tổng số:
                                  </span>
                                  <span className="text-base font-normal text-[#595965]">
                                    16 bản ghi
                                  </span>
                                </div>
                                <div className=" flex gap-4 items-center">
                                  <span className="font-semibold text-base text-[#AEAEAE]">
                                    Tổng thời lượng:
                                  </span>
                                  <span className="text-base font-normal text-[#595965]">
                                    01:34:31
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className=" flex gap-4 items-center">
                                  <span className="font-semibold text-base text-[#FFFFFF]">
                                    Thể loại:
                                  </span>
                                  <div>
                                    <Select
                                      options={optionsFormat}
                                      defaultValue={optionsFormat[0].value}
                                      style={{
                                        width: 150,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="max-w-[382px] w-full">
                                  <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                                    <input
                                      className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                                      placeholder="Tên chủ đề, người tạo,..."
                                    />
                                    <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full h-[350px] shrink-0 flex ">
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
                                            <td className="text-center py-3 ">
                                              {val.id}
                                            </td>
                                            <td className="text-center  ">
                                              <div className="flex flex-col">
                                                <span className="text-[#FFFFFF] font-normal text-sm">
                                                  {val.name_record}
                                                </span>
                                                <div className="flex justify-center gap-1 items-center text-[#FFFFFF] font-normal text-xs">
                                                  <span>{val.category}</span>
                                                  <i className="fa-solid fa-circle text-[4px] text-[#347AFF]"></i>
                                                  <span>{val.format}</span>
                                                  <i className="fa-solid fa-circle text-[4px] text-[#347AFF]"></i>
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
                            </div>
                            {/* Pagination  */}
                            <div className=" flex justify-between px-6 mb-4">
                              <div className="flex gap-2 text-[#F5F5FF] items-center">
                                <span>Hiển thị </span>
                                <div className="border-[1px] border-solid border-[#FF7506] rounded">
                                  <span className="px-4 py-2"> 8 </span>
                                </div>
                                <span>hàng trong mỗi trang </span>
                              </div>
                              <div>
                                <Paginations />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-8 ">
                          <Link to={`/playlist/detail/${val.id}/update`}>
                            <div className="button-cancel">
                              <button className="px-6 py-3 text-[#FF7506]">
                                Hủy
                              </button>
                            </div>
                          </Link>
                          <div className="button-primary">
                            <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                              Lưu
                            </button>
                          </div>
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

export default AddRecordPlaylist;
