import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const UpdatePlaylist: React.FC = () => {
  const { id } = useParams();

  const [detailPlaylist, setDetailPlaylist] = useState([]);
  console.log(detailPlaylist, "detailPlaylist");

  useEffect(() => {
    axios
      .get("http://localhost:4444/playlist/" + id)
      .then((res) => {
        setDetailPlaylist(res.data);
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
  }, []);

  const [valuesPlaylist, setValuesPlaylist] = useState({
    namePlaylist: "",
    descriptionPlaylist: "",
    titlePlaylist: "",
  });

  return (
    <>
      {detailPlaylist?.map((val: any) => {
        return (
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
                    Playlist - {val.name_record}
                  </span>
                </div>

                {/* Cotent Record  */}
                <div className="flex gap-10 justify-between ">
                  <div className="max-w-[1540px] w-full flex gap-6">
                    <div className="min-w-[274px] w-full flex flex-col gap-1">
                      <div className="shrink-0 relative">
                        <img
                          className="w-full object-cover rounded-lg"
                          src={val.thumbnail_playlist}
                          alt=""
                        />
                        <div className="absolute group top-2 right-2">
                          <div className="shrink-0 w-8 h-8 cursor-pointer bg-[#FF7506] rounded-full flex justify-center items-center">
                            <i className="fa-solid fa-ellipsis-vertical text-[#F5F5FF]"></i>
                          </div>
                          <div className="invisible rounded-lg opacity-0 absolute z-30 bg-[#30303F] left-[-40px] w-[135px] shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                            <div className=" w-full h-[1px] bg-[#30303F] rounded-t-[10px]"></div>

                            <div className="flex flex-col items-center w-full rounded-lg ">
                              {/* Thông báo 1 */}

                              <div className="w-full ">
                                <div className="w-full ">
                                  <div className="px-3 text-[#C8C8DB] py-2 text-xs font-medium rounded-t-lg flex hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                                    Tải lên hình ảnh
                                  </div>
                                </div>
                              </div>
                              <div className=" w-full h-[1px] bg-[#C8C8DB] mx-2"></div>

                              {/* Thông báo 2*/}

                              <div className="w-full ">
                                <div className="w-full ">
                                  <div className="px-3 py-2 text-[#C8C8DB] text-xs font-medium  flex rounded-b-lg hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                                    Xóa hình ảnh
                                  </div>
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                            </div>
                          </div>
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
                            value={valuesPlaylist.namePlaylist}
                            onChange={(e) =>
                              setValuesPlaylist({
                                ...valuesPlaylist,
                                namePlaylist: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

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
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="text-[#F5F5FF] text-base font-bold">
                            Mô tả:
                          </span>
                        </div>
                        <div>
                          <textarea
                            value={valuesPlaylist.descriptionPlaylist}
                            onChange={(e) =>
                              setValuesPlaylist({
                                ...valuesPlaylist,
                                descriptionPlaylist: e.target.value,
                              })
                            }
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
                            value={valuesPlaylist.titlePlaylist}
                            onChange={(e) =>
                              setValuesPlaylist({
                                ...valuesPlaylist,
                                titlePlaylist: e.target.value,
                              })
                            }
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
                      <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        <span className="text-[#595965] font-medium text-xs">
                          là những trường thông tin bắt buộc
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-10">
                      <div className="bg-[#2F2F41] h-full flex flex-col justify-between gap-[50px]  rounded-2xl">
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
                      <div className="flex justify-center items-center gap-8  mt-10">
                        <Link to={`/playlist/detail/${val.id}`}>
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
                    <Link to={`/playlist/detail/${val.id}/update/addrecord`}>
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
        );
      })}
    </>
  );
};

export default UpdatePlaylist;
