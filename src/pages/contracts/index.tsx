import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import CheckBox from "../../components/checkbox";
import { Select } from "antd";
import "../../sass/selectedField.scss";
import {
  optionsAuthorized,
  optionsStatusContract,
} from "../../constants/optionsSelect";
import { Link } from "react-router-dom";
import CheckBoxItem from "../../components/checkboxItem";
import { Modal, Ripple, initTE } from "tw-elements";

const Contract: React.FC = () => {
  const [contract, setContract] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/contract")
      .then((res) => {
        setContract(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isTable, setIsTable] = useState<boolean>(true);

  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };

  return (
    <>
      {contract ? (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Quản lý
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Quản lý hợp đồng
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Danh sách hợp đồng
                </span>
              </div>
              <div className=" flex items-center">
                <div onClick={handleClickIsTable} className="cursor-pointer">
                  {isTable ? (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Hợp đồng uỷ quyền
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="border-[1px] border-[#FF7506] border-solid rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-normal">
                          Hợp đồng uỷ quyền
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div onClick={handleClickIsNotTable} className="cursor-pointer">
                  {isTable ? (
                    <div className="border-[1px] border-[#FF7506] border-solid rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-normal">
                          Hợp đồng khai thác
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Hợp đồng khai thác
                        </span>
                      </div>
                    </div>
                  )}
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
                          Quyền sở hữu:
                        </span>
                        <div>
                          <Select
                            options={optionsAuthorized}
                            defaultValue={`Tất cả`}
                            style={{
                              width: 160,
                            }}
                          />
                        </div>
                      </div>
                      {/* Định dạng  */}
                      <div className=" flex gap-4 items-center">
                        <span className="font-semibold text-base text-[#FFFFFF]">
                          Hiệu lực hợp đồng:
                        </span>
                        <div>
                          <Select
                            options={optionsStatusContract}
                            defaultValue={`Tất cả`}
                            style={{
                              width: 160,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[517px] w-full">
                      <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                        <input
                          className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                          placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
                        />
                        <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                      </div>
                    </div>
                  </div>
                  {isTable ? (
                    <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69]  text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th className="">Số hợp đồng</th>
                              <th className="w-[252px]">Tên hợp đồng</th>
                              <th>Người uỷ quyền</th>
                              <th>Quyền sở hữu</th>
                              <th>Hiệu lực hợp đồng</th>
                              <th>Ngày tạo</th>
                              <th className="w-28"></th>
                              <th className="w-28"></th>
                            </tr>
                            {contract?.map((val: any) => {
                              return (
                                <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                  <tr
                                    key={val.id}
                                    className="text[#535261] text-[14px] font-normal ">
                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center ">
                                      {val.number}
                                    </td>
                                    <td className="text-center ">{val.name}</td>
                                    <td className="text-center  ">
                                      {val.authorized}
                                    </td>
                                    <td className="text-center  ">
                                      {val.ownership}
                                    </td>
                                    <td className="text-center">
                                      {val.status ? (
                                        <td className="text-center ">
                                          <div className=" flex  items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                            <p>Còn thời hạn</p>
                                          </div>
                                        </td>
                                      ) : (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                            <p>Đã huỷ</p>
                                          </div>
                                        </td>
                                      )}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>

                                    <td>
                                      {/* <Link to={`/device/updatedevice/${val.id}`}> */}
                                      <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                        Xem chi tiết
                                      </td>
                                      {/* </Link> */}
                                    </td>
                                    {val.status ? (
                                      <td className="text-center  "></td>
                                    ) : (
                                      <td>
                                        <div>
                                          <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                                            {/* <!-- Button trigger vertically centered modal--> */}
                                            <button
                                              type="button"
                                              className=""
                                              data-te-toggle="modal"
                                              data-te-target="#exampleModalCenter"
                                              data-te-ripple-init
                                              tabIndex={-1}
                                              data-te-ripple-color="light">
                                              <td className="   ">
                                                {/* <Link to={`/device/updatedevice/${val.id}`}> */}
                                                <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                                  Lý do hủy
                                                </td>
                                                {/* </Link> */}
                                              </td>
                                            </button>
                                          </div>

                                          {/* <!--Verically centered modal--> */}
                                          <div
                                            data-te-modal-init
                                            className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                                            id="exampleModalCenter"
                                            aria-labelledby="exampleModalCenterTitle"
                                            aria-modal="true"
                                            role="dialog">
                                            <div
                                              data-te-modal-dialog-ref
                                              className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                              <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#3E3E5B] bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                                {/* <!--Modal body--> */}
                                                <div className="relative p-4 flex flex-col items-center justify-center gap-6">
                                                  <div className="text-[#FFFFFF] text-xl font-bold">
                                                    <span>
                                                      Lý do hủy hợp đồng uỷ
                                                      quyền{" "}
                                                      <span>{val.number}</span>
                                                    </span>
                                                  </div>
                                                  <div className="border-[#727288] border-[1px] border-solid rounded-lg">
                                                    <div className="px-4 py-[92px]">
                                                      <span>
                                                        Hủy hợp đồng để tạo hợp
                                                        đồng mới với giá trị và
                                                        thời hạn lâu hơn.
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                {/* <!--Modal footer--> */}
                                                <div className="flex justify-center items-center gap-8 mb-4">
                                                  <div className="button-primary">
                                                    <button
                                                      type="button"
                                                      data-te-modal-dismiss
                                                      aria-label="Close"
                                                      className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                                                      Đóng
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    )}
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
                            <span className="px-4 py-2"> 13 </span>
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
                        {contract?.map((val: any) => {
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

                                      {isChecked ? (
                                        <div className="flex justify-center items-center">
                                          <CheckBox
                                            isChecked={isChecked}
                                            titleCheckbox=""
                                          />
                                        </div>
                                      ) : (
                                        <div className="flex justify-center items-center">
                                          <CheckBoxItem titleCheckbox="" />
                                        </div>
                                      )}
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
                            <span className="px-4 py-2"> 8 </span>
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
                <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                  <div className="bg-[#2F2F41] h-full hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-plus text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Thêm hợp đồng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

export default Contract;