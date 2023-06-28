import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import { Select } from "antd";
import "../../sass/selectedField.scss";
import {
  optionsAuthorized,
  optionsStatusContract,
} from "../../constants/optionsSelect";
import { Link } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

const Contract: React.FC = () => {
  const [contract, setContract] = useState([]);
  const [exploitation, setExploitation] = useState([]);
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
    axios
      .get("http://localhost:4444/exploitation")
      .then((res) => {
        setExploitation(res.data);
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
              {isTable ? (
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
                                      <Link
                                        to={`/contract/managecontract/detailAuthorizationContract/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Xem chi tiết
                                        </td>
                                      </Link>
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
                  </div>
                  <Link to="/contract/managecontract/add">
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
                  </Link>
                </div>
              ) : (
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1541px] w-full flex-col gap-6">
                    <div className="max-w-full">
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Tên hợp đồng, tác giả,..."
                          />
                          <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69]  text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th className="">Số hợp đồng</th>
                              <th className="w-[252px]">Tên hợp đồng</th>
                              <th>Ngày tạo</th>
                              <th>Ngày hiệu lực</th>
                              <th>Ngày hết hạn</th>
                              <th>Hiệu lực hợp đồng</th>
                              <th className="w-28"></th>
                              <th className="w-32"></th>
                            </tr>
                            {exploitation?.map((val: any) => {
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

                                    <td className="text-center  ">
                                      {val.name}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.apply_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.expire_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center">
                                      {val.status === "Đang hiệu lực" && (
                                        <td className="text-center ">
                                          <div className=" flex  items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                            <p>Đang hiệu lực</p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === "Đã hủy" && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                            <p>Đã huỷ</p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === "Mới" && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                                            <p>Mới</p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === "Hết hiệu lực" && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#878890]"></i>
                                            <p>Hết hiệu lực</p>
                                          </div>
                                        </td>
                                      )}
                                    </td>

                                    <td>
                                      <Link
                                        to={`/contract/managecontract/detail/${val.id}`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Xem chi tiết
                                        </td>
                                      </Link>
                                    </td>
                                    <td>
                                      <Link
                                        to={`/contract/managecontract/detail/${val.id}/savecontract`}>
                                        <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                          Sao chép hợp đồng
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
                  </div>
                  <Link to="/contract/managecontract/addExploitationContract">
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
                  </Link>
                </div>
              )}
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
