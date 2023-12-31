import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { useAppSelector } from "../../store/hooks";
import { IRecord } from "../../constants/typepage/records";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginations from "../../components/pagination";
import {
  optionsApprovePeople,
  optionsCategory,
  optionsExpiryDate,
  optionsFormat,
} from "../../constants/optionsSelect";
import { Select } from "antd";

const Record: React.FC = () => {
  const [record, setRecord] = useState([]);
  const [isTable, setIsTable] = useState<boolean>(true);

  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4444/records")
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {record && (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Kho bản ghi
              </span>
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
                        <div>
                          <Select
                            options={optionsCategory}
                            defaultValue={optionsCategory[0].value}
                          />
                        </div>
                      </div>
                      {/* Định dạng  */}
                      <div className=" flex gap-4 items-center">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Định dạng:
                        </span>
                        <div>
                          <Select
                            options={optionsFormat}
                            defaultValue={optionsFormat[0].value}
                          />
                        </div>
                      </div>
                      {/* Thời hạn sử dụng  */}
                      <div className=" flex gap-4 items-center">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Thời hạn sử dụng:
                        </span>
                        <div>
                          <Select
                            options={optionsExpiryDate}
                            defaultValue={optionsExpiryDate[0].value}
                          />
                        </div>
                      </div>
                      {/* Trạng thái */}
                      <div className=" flex gap-4 items-center ">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Trạng thái:
                        </span>
                        <div>
                          <Select
                            options={optionsApprovePeople}
                            style={{ width: 240 }}
                            defaultValue={optionsApprovePeople[0].value}
                          />
                        </div>
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
                              <th>Tên bản ghi</th>
                              <th>Mã ISRC</th>
                              <th>Thời lượng</th>
                              <th>Ca sĩ</th>
                              <th>Tác giả</th>
                              <th>Thể loại</th>
                              <th>Định dạng</th>
                              <th>Thời hạn sử dụng</th>
                              <th></th>
                              <th></th>
                            </tr>
                            {record?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center  ">
                                      {val.name_record}
                                    </td>
                                    <td className="text-center  ">
                                      {val.id_isrc}
                                    </td>
                                    <td className="text-center  ">
                                      {val.duration}
                                    </td>

                                    <td className="text-center  ">
                                      {val.singer}
                                    </td>
                                    <td className="text-center  ">
                                      {val.auth}
                                    </td>
                                    <td className="text-center  ">
                                      {val.category}
                                    </td>
                                    <td className="text-center  ">
                                      {val.format}
                                    </td>
                                    <td className="  px-4">
                                      <tr className="flex flex-col">
                                        <td className="">
                                          {val.status_expiry ? (
                                            <td className="   ">
                                              <div className=" flex  items-center gap-1">
                                                <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                                <p>Còn thời hạn</p>
                                              </div>
                                            </td>
                                          ) : (
                                            <td className="   ">
                                              <div className=" flex items-center gap-1">
                                                <i className="fa-solid fa-circle text-[8px] text-[#878890]"></i>
                                                <p>Đã hết hạn</p>
                                              </div>
                                            </td>
                                          )}
                                        </td>
                                        <td className="text-[#FFFFFF]">
                                          {new Date(
                                            val.expiry_date
                                          ).toLocaleDateString("en-GB")}
                                        </td>
                                      </tr>
                                    </td>

                                    <td>
                                      <Link
                                        to={`/records/updaterecords/${val.id}`}>
                                        <td className="text-center flex justify-center text-[#FF7506] underline text-xs font-semibold">
                                          Cập nhật
                                        </td>
                                      </Link>
                                    </td>
                                    <td>
                                      <Link
                                        to={`/device/updatedevice/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Nghe
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
                        {record?.map((val: any) => {
                          return (
                            <div className="">
                              <div
                                key={val.id}
                                className="bg-[#393955B2] rounded-lg w-[342px] flex flex-col gap-2">
                                <div className="w-full">
                                  <img
                                    className=" w-full rounded-t-lg h-[156px] object-cover"
                                    src={val.thumbnail}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {/* Thông tin  */}
                                  <div className="flex flex-col gap-1 px-4">
                                    <div className="flex flex-col gap-[2px]">
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Handcrafted Fresh Bacon Multy
                                      </span>
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Ca sĩ:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {val.singer}
                                        </span>
                                      </span>
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Sáng tác:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {val.auth}
                                        </span>
                                      </span>
                                      <span className="text-[#FFFFFF] font-semibold text-base">
                                        Số hợp đồng:{" "}
                                        <span className="text-[#727288] font-semibold text-base">
                                          {val.contract_number}
                                        </span>
                                      </span>
                                    </div>
                                    <div className=" flex justify-between mb-2">
                                      <div className=" flex gap-2">
                                        <div className="border-[1px] border-solid border-[#727288] rounded-md px-3 py-1 flex flex-col justify-center items-center">
                                          <p className="text-[#727288] font-bold text-[8px]">
                                            Thể loại
                                          </p>
                                          <p className="text-[#F5F5FF] text-xs font-medium">
                                            {val.category}
                                          </p>
                                        </div>
                                        <div className="border-[1px] border-solid border-[#727288] rounded-md px-3 py-1 flex flex-col justify-center items-center">
                                          <p className="text-[#727288] font-bold text-[8px]">
                                            Định dạng
                                          </p>
                                          <p className="text-[#F5F5FF] text-xs font-medium">
                                            {val.format}
                                          </p>
                                        </div>
                                        <div className="border-[1px] border-solid border-[#727288] rounded-md px-3 py-1 flex flex-col justify-center items-center">
                                          <p className="text-[#727288] font-bold text-[8px]">
                                            Thời lượng
                                          </p>
                                          <p className="text-[#F5F5FF] text-xs font-medium">
                                            {val.duration}
                                          </p>
                                        </div>
                                      </div>
                                      <Link
                                        to={`/records/updaterecords/${val.id}`}>
                                        <div>
                                          <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
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
                <Link to="/records/approverecord">
                  <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Quản lý phê duyệt
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

export default Record;
