import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const AddPlaylist: React.FC = () => {
  const [imagePlaylist, setImagePlaylist] = useState("");
  const [namePlaylist, setNamePlaylist] = useState("");
  const [descriptionPlaylist, setDescriptionPlaylist] = useState("");
  const [titlePlaylist, setTitlePlaylist] = useState("");

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
                    Playlist
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Thêm playlist mới
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thêm Playlist
              </span>
            </div>

            {/* Cotent Record  */}
            <div className="flex gap-10 justify-between ">
              <div className="max-w-[1540px] w-full flex gap-6">
                <div className="min-w-[274px] w-full flex flex-col gap-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Ảnh bìa:
                      </span>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="file"
                        value={imagePlaylist}
                        onChange={(e) => setImagePlaylist(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Tiêu đề :
                      </span>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={namePlaylist}
                        onChange={(e) => setNamePlaylist(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="border-[1px] border-solid border-[#727288]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                      Tổng số:{" "}
                      <span className="font-normal text-[#595965]">
                        0 bản ghi
                      </span>
                    </span>
                    <span className="text-[#FFFFFF] text-base font-bold flex justify-between">
                      Tổng thời lượng:{" "}
                      <span className="font-normal text-[#595965]">
                        --:--:--
                      </span>
                    </span>
                  </div>
                  <div className="border-[1px] border-solid border-[#727288]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Mô tả:
                      </span>
                    </div>
                    <div>
                      <textarea
                        value={descriptionPlaylist}
                        onChange={(e) => setDescriptionPlaylist(e.target.value)}
                        className="rounded-lg border-[1px] h-[100px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        name=""
                        id=""
                        cols={30}
                        rows={5}></textarea>
                    </div>
                  </div>

                  <div className="border-[1px] border-solid border-[#727288]"></div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Chủ đề:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={titlePlaylist}
                        placeholder="Nhập chủ đề"
                        onChange={(e) => setTitlePlaylist(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#727288]"></div>
                  <div>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Chế độ công khai"
                      className="text-[#FFFFFF]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-10">
                  <div className="bg-[#2F2F41] h-full flex flex-col gap-[50px] rounded-2xl">
                    {/* Table List Record */}
                    <div className="w-full shrink-0 flex ">
                      <thead>
                        <table className="shadow-lg w-full table-fixed tab">
                          <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                            <th className="w-16 py-3">STT</th>
                            <th>Tên bản ghi</th>
                            <th>Ca sĩ</th>
                            <th>Tác giả</th>
                            <th className="w-20"></th>
                            <th className="w-20"></th>
                          </tr>
                        </table>
                      </thead>
                    </div>
                    <div className=" flex justify-center items-center gap-2">
                      <span className="text-[#F5F5FF] text-base font-semibold">
                        Vui lòng chọn bản ghi để thêm vào Playlist
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-8  mt-10">
                    <Link to="/playlist">
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
              <div className="bg-[#2F2F41] h-[130px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                <Link to="/playlist/addPlaylist/addrecordplaylist">
                  <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-plus text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Thêm bản ghi
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

export default AddPlaylist;
