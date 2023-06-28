import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import Paginations from "../../components/pagination";
import "../../sass/selectedField.scss";
import { Link } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import CheckBox from "../../components/checkbox";
import CheckBoxItem from "../../components/checkboxItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
initTE({ Modal, Ripple });

const Operators: React.FC = () => {
  const [operators, setOperators] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/operators")
      .then((res) => {
        setOperators(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                    Quản lý
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Đơn vị sử dụng
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Danh sách đơn vị sử dụng
              </span>
            </div>

            {/* Cotent Operators  */}
            <div className="flex gap-10 justify-between ">
              <div className=" max-w-[1541px] w-full flex-col gap-6">
                <div className="max-w-full">
                  <div className="max-w-[517px] w-full">
                    <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                      <input
                        className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                        placeholder="Tên khoản giá trị, số hợp đồng,..."
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
                          <th className="w-16 pt-4" onChange={handleChecked}>
                            <CheckBox isChecked={isChecked} titleCheckbox="" />
                          </th>
                          <th className="w-16">STT</th>
                          <th className="w-[252px]">Tên tài khoản quản trị</th>
                          <th className="">Số hợp đồng</th>
                          <th>Admin</th>
                          <th>Người dùng</th>
                          <th className="w-[252px]">Thiết bị được chỉ định</th>
                          <th>Ngày hết hạn</th>
                          <th className="w-[192px]">Trạng thái</th>
                          <th className="w-28"></th>
                        </tr>
                        {operators?.map((val: any) => {
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
                                <td className="text-center py-3 ">{val.id}</td>
                                <td className="text-center ">{val.company}</td>
                                <td className="text-center ">
                                  {val.number_contract}
                                </td>
                                <td className="text-center  ">{val.admin}</td>
                                <td className="text-center  ">{val.user}</td>
                                <td className="text-center  ">{val.device}</td>
                                <td className="text-center">
                                  {new Date(val.expire_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </td>
                                <td className="text-center">
                                  {val.status ? (
                                    <td className="text-center ">
                                      <div className=" flex  items-center gap-1">
                                        <div>
                                          <FormControlLabel
                                            control={
                                              <Switch defaultChecked={true} />
                                            }
                                            label="Đang kích hoạt"
                                            className="text-[#FFFFFF]"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  ) : (
                                    <td className="text-center">
                                      <div className=" flex items-center gap-1">
                                        <div>
                                          <FormControlLabel
                                            control={
                                              <Switch defaultChecked={false} />
                                            }
                                            label="Ngừng kích hoạt"
                                            className="text-[#FFFFFF]"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  )}
                                </td>

                                <td>
                                  <Link
                                    to={`/contract/operators/detail/${val.id}`}>
                                    <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                      Xem chi tiết
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
                    data-te-ripple-color="none">
                    <div className="bg-[#2F2F41] h-[110px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="bg-[#2F2F41] h-full hover:cursor-pointer px-4 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-x text-[#FF4747] text-2xl font-bold"></i>
                        </div>

                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Xóa
                        </span>
                      </div>
                    </div>
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
                            Xóa đơn vị sử dụng
                          </p>
                        </div>
                        <div className="w-full">
                          <textarea
                            className="w-full bg-[#2B2B3F] text-[#727288] rounded-xl px-2 py-2 focus:border-none"
                            placeholder="Cho chúng tôi biết lý do bạn muốn xóa đơn vị sử dụng này..."
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
                            Quay lại
                          </button>
                        </div>

                        <div className="button-primary">
                          <button
                            type="submit"
                            className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                            Xóa
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
    </>
  );
};

export default Operators;
