import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import CheckBox from "../../components/checkbox";
import { Select, Checkbox } from "antd";
import "../../sass/selectedField.scss";
import { optionsCategory, optionsFormat } from "../../constants/optionsSelect";
import { Link } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import CheckBoxItem from "../../components/checkboxItem";
initTE({ Modal, Ripple });

const ApproveRecord: React.FC = () => {
  const [approveRecord, setApproveRecord] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [checkedItem, setCheckedItem] = useState(false);

  const handleCheckedItem = () => {
    if (checkedItem) {
      setCheckedItem(false);
    } else {
      setCheckedItem(true);
    }
  };
  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/records")
      .then((res) => {
        setApproveRecord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
      console.log(isChecked, "false");
    } else {
      setIsChecked(true);
      console.log(isChecked, "true");
    }
  };

  const [isTable, setIsTable] = useState<boolean>(true);

  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };

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

                      <div
                        onChange={handleChecked}
                        className="flex justify-center items-center">
                        <CheckBox
                          isChecked={isChecked}
                          titleCheckbox="Chọn tất cả"
                        />
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
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69]  text-base font-bold bg-[#2F2F41]">
                              <th className="w-16 py-4"></th>

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
                                    {isChecked ? (
                                      <td className="text-center py-3 ">
                                        <CheckBox
                                          isChecked={isChecked}
                                          titleCheckbox=""
                                        />
                                      </td>
                                    ) : (
                                      <td className="text-center py-3 ">
                                        <CheckBoxItem titleCheckbox="" />
                                      </td>
                                    )}

                                    <td className="text-center py-3 ">
                                      {val.id}
                                    </td>
                                    <td className="text-center ">
                                      {val.name_record}
                                    </td>

                                    <td className="text-center  ">
                                      {val.singer}
                                    </td>
                                    <td className="text-center  ">
                                      {val.auth}
                                    </td>
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
                  ) : (
                    <div className=" mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      {/* Table List Record */}
                      <div className="grid grid-cols-4">
                        {approveRecord?.map((val: any) => {
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
                <div className="bg-[#2F2F41] h-[230px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                  <div className="bg-[#2F2F41] h-[130px] hover:cursor-pointer px-6 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-check text-[#0FBF00] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Phê duyệt
                    </span>
                  </div>

                  <div>
                    <div className="bg-[#2F2F41] h-[92px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      {/* <!-- Button trigger vertically centered modal--> */}
                      <button
                        type="button"
                        className=" py-3 px-9 text-[#FFFFFF] text-base font-bold"
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init
                        tabIndex={-1}
                        data-te-ripple-color="light">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-x text-[#FF4747] text-2xl font-bold"></i>
                        </div>
                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Từ chối
                        </span>
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
                            <div>
                              <p className="text-[#FFFFFF] text-2xl font-bold ">
                                Lý do từ chối phê duyệt
                              </p>
                            </div>
                            <div className="w-full h-[208px]">
                              <textarea
                                className="w-full h-full focus:outline-none bg-[#2B2B3F] text-[#727288] text-base font-normal px-4 py-2 rounded-lg"
                                placeholder="Lý do bạn muốn từ chối phê duyệt bản ghi này..."
                                name=""
                                id=""
                                cols={30}
                                rows={6}></textarea>
                            </div>
                          </div>

                          {/* <!--Modal footer--> */}
                          <div className="flex justify-center items-center gap-8 mb-4">
                            <div className="button-cancel">
                              <button
                                type="button"
                                data-te-modal-dismiss
                                aria-label="Close"
                                className="px-6 py-3 text-[#FF7506]">
                                Hủy
                              </button>
                            </div>

                            <div className="button-primary">
                              <button
                                type="submit"
                                className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                                Lưu
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
