import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { useAppSelector } from "../../store/hooks";
import { IRecord } from "../../constants/typepage/records";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";
import CheckBox from "../../components/checkbox";

const ApproveRecord: React.FC = () => {
  const [approveRecord, setApproveRecord] = useState([]);
  console.log(approveRecord, "recordrecord");
  useEffect(() => {
    axios
      .get("http://localhost:4444/records")
      .then((res) => {
        setApproveRecord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {approveRecord ? (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Kho bản ghi
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Quản lý phê duyệt
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Phê duyệt bản ghi
                </span>
              </div>

              <div className="max-w-[517px] w-full mr-[104px]">
                <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                  <input
                    className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                    placeholder="Tên bản ghi, ca sĩ,..."
                  />
                  <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                </div>
              </div>
              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                <div className=" max-w-[1541px] w-full flex-col gap-6">
                  <div className="max-w-full flex justify-between">
                    <div className="flex  w-full gap-16">
                      {/* Thể loại: */}
                      <div className=" flex gap-4 items-center">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Thể loại:
                        </span>
                        <div className="relative group">
                          <div className="flex gap-8 justify-between cursor-pointer items-center px-4 py-2  border-[1.5px] border-solid border-[#FF7506] rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#F5F5FF] list-none">
                              Tất cả
                            </li>
                            <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                          </div>

                          <div className="invisible rounded-lg opacity-0 absolute  bg-[#3E3E5B] w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                            <div className=" w-full h-[1px] bg-[#3E3E5B] rounded-t-[10px]"></div>

                            <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                              {/* Thông báo 1 */}
                              <div className="w-full ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B] hover:rounded-t-lg">
                                  Tất cả
                                </div>
                              </div>

                              {/* Thông báo 2 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B]">
                                  Pop
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B]">
                                  EDM
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B] hover:rounded-b-lg">
                                  Ballad
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Định dạng  */}
                      <div className=" flex gap-4 items-center">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Định dạng:
                        </span>
                        <div className="relative group">
                          <div className="flex gap-8 justify-between cursor-pointer items-center px-4 py-2  border-[1.5px] border-solid border-[#FF7506] rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#F5F5FF] list-none">
                              Tất cả
                            </li>
                            <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                          </div>

                          <div className="invisible rounded-lg opacity-0 absolute  bg-[#3E3E5B] w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                            <div className=" w-full h-[1px] bg-[#3E3E5B] rounded-t-[10px]"></div>

                            <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                              {/* Thông báo 1 */}
                              <div className="w-full ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B] hover:rounded-t-lg">
                                  Tất cả
                                </div>
                              </div>

                              {/* Thông báo 2 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B]">
                                  Âm thanh
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#3E3E5B]">
                                  Video
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-6 items-center">
                      <div>
                        <i className="fa-solid fa-list text-3xl text-[#AEAEAE]"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-table text-3xl text-[#AEAEAE]"></i>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                    <div className="w-full shrink-0 flex ">
                      <thead>
                        <table className="shadow-lg w-full table-fixed tab">
                          <tr className="text-[#FFAC69]  text-base font-bold bg-[#2F2F41]">
                            <th className="w-16 py-4">
                              <CheckBox titleCheckbox="" />
                            </th>
                            <th className="w-16">STT</th>
                            <th className="w-[252px]">Tên bản ghi</th>
                            <th>Ca sĩ</th>
                            <th>Tác giả</th>
                            <th>Mã ISRC</th>
                            <th>Số hợp đồng</th>
                            <th>Ngày tải</th>
                            <th></th>
                          </tr>
                          {approveRecord?.map((val: any) => {
                            return (
                              <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                <tr
                                  key={val.id}
                                  className="text[#535261] text-[14px] font-normal ">
                                  <td className="text-center py-3 ">
                                    <CheckBox titleCheckbox="" />
                                  </td>
                                  <td className="text-center py-3 ">
                                    {val.id}
                                  </td>
                                  <td className="text-center ">
                                    {val.name_record}
                                  </td>

                                  <td className="text-center  ">
                                    {val.singer}
                                  </td>
                                  <td className="text-center  ">{val.auth}</td>
                                  <td className="text-center  ">
                                    {val.id_isrc}
                                  </td>
                                  <td className="text-center  ">
                                    {val.contract_number}
                                  </td>
                                  <td className="text-center  ">
                                    {new Date(
                                      val.start_date
                                    ).toLocaleDateString("en-GB")}
                                  </td>

                                  <td>
                                    {/* <Link to={`/device/updatedevice/${val.id}`}> */}
                                    <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                      Nghe
                                    </td>
                                    {/* </Link> */}
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      </thead>
                    </div>
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
                <div className="bg-[#2F2F41] h-[230px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                  <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer px-6 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-check text-[#0FBF00] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Phê duyệt
                    </span>
                  </div>
                  <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-x text-[#FF4747] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Từ chối
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>aaaaaa</div>
      )}
    </>
  );
};

export default ApproveRecord;
