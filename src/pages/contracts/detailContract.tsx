import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

const DetailContract: React.FC = () => {
  const { id } = useParams();
  const [contract, setContract] = useState([]);
  const [nameContract, setNameContract] = useState("");

  useEffect(() => {
    initTE({ Modal, Ripple });

    axios
      .get("http://localhost:4444/exploitation/" + id)
      .then((res) => {
        setContract(res.data);
        setNameContract(res.data[0].number);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {contract ? (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl relative">
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
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Quản lý hợp đồng
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>
                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Chi tiết
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Hợp đồng khai thác - {nameContract}
                </span>
              </div>

              {/* Cotent Record  */}
              <div className="flex gap-10 justify-between ">
                {contract.map((val: any) => {
                  return (
                    <div className=" max-w-[1541px] w-full flex flex-col gap-24">
                      <div className=" flex justify-between">
                        {/* cột 1 */}
                        <div className=" flex flex-col gap-3 w-[500px]">
                          <div className="flex gap-7">
                            <div className="w-36">
                              <span className="text-[#FFFFFF] font-bold">
                                Số hợp đồng:
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.number}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-36">
                              <span className="text-[#FFFFFF] font-bold">
                                Tên hợp đồng:
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.name}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-36">
                              <span className="text-[#FFFFFF] font-bold">
                                Ngày hiệu lực:
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {new Date(val.start_date).toLocaleDateString(
                                  "en-GB"
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-36">
                              <span className="text-[#FFFFFF] font-bold">
                                Ngày hết hạn:
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {new Date(val.expire_date).toLocaleDateString(
                                  "en-GB"
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* cột 2 */}
                        <div className="flex justify-between gap-7 ">
                          <div>
                            <span className="text-[#FFFFFF] font-bold">
                              Đính kèm tệp:
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-[#F5F5FF] font-normal text-base">
                              <i className="fa-solid fa-file"></i>{" "}
                              hetthuongcannho.doc
                            </span>
                            <span className="text-[#F5F5FF] font-normal text-base">
                              <i className="fa-solid fa-file"></i>{" "}
                              hetthuongcannho.doc
                            </span>
                          </div>
                        </div>
                        {/* cột 3 */}
                        <div className=" flex flex-col gap-3 w-[500px]">
                          <div className="flex gap-7">
                            <div className="w-60">
                              <span className="text-[#FFFFFF] font-bold">
                                Loại hợp đồng:
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.category_contract}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-60">
                              <span className="text-[#FFFFFF] font-bold">
                                Giá trị hợp đồng (VNĐ):
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.value}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-60">
                              <span className="text-[#FFFFFF] font-bold">
                                Giá trị phân phối (VNĐ/ngày):
                              </span>
                            </div>
                            <div>
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.distribution_value}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-60">
                              <span className="text-[#FFFFFF] font-bold">
                                Tình trạng:
                              </span>
                            </div>
                            {val.status === "Đang hiệu lực" && (
                              <div className=" flex  items-center gap-1 text-[#FFF] text-base font-normal">
                                <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                <p>Đang hiệu lực</p>
                              </div>
                            )}
                            {val.status === "Đã hủy" && (
                              <div className=" flex items-center gap-1 text-[#FFF] text-base font-normal">
                                <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                <p>Đã huỷ</p>
                              </div>
                            )}
                            {val.status === "Mới" && (
                              <div className=" flex items-center gap-1 text-[#FFF] text-base font-normal">
                                <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                                <p>Mới</p>
                              </div>
                            )}
                            {val.status === "Hết hiệu lực" && (
                              <div className=" flex items-center gap-1 text-[#FFF] text-base font-normal">
                                <i className="fa-solid fa-circle text-[8px] text-[#878890]"></i>
                                <p>Hết hiệu lực</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className=" flex justify-between">
                          {/* cột 1 */}
                          <div className=" flex flex-col gap-3 w-[500px]">
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Tên đơn vị sử dụng:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.customer}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Người đại diện:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.delegate}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Chức vụ:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.position}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Ngày sinh:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {new Date(val.birthday).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>

                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Quốc tịch:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.country}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  Số điện thoại:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.phone}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-48">
                                <span className="text-[#FFFFFF] font-bold">
                                  email:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.email}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* cột 2 */}
                          <div className=" flex flex-col gap-3 w-[450px]">
                            <div className="flex  gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Giới tính:
                                </span>
                              </div>
                              {val.gender ? (
                                <div className=" flex  items-center gap-1">
                                  <p className="text-[#F5F5FF] font-normal text-base">
                                    Nam
                                  </p>
                                </div>
                              ) : (
                                <div className=" flex items-center gap-1">
                                  <p className="text-[#F5F5FF] font-normal text-base">
                                    Nữ
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="flex gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Số CMND/ CCCD:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.identification}
                                </span>
                              </div>
                            </div>

                            <div className="flex gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Ngày cấp:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {new Date(val.date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Nơi cấp:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.country}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Mã số thuế:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.tax}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="max-w-[144px] w-full">
                                <span className="text-[#FFFFFF] font-bold">
                                  Nơi cư trú:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.address}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* cột 3 */}
                          <div className=" flex flex-col gap-3">
                            <div className="flex gap-7">
                              <div className="w-44">
                                <span className="text-[#FFFFFF] font-bold">
                                  Tên đăng nhập:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.account_login}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-44">
                                <span className="text-[#FFFFFF] font-bold">
                                  Mật khẩu:
                                </span>
                              </div>
                              <div>
                                <input
                                  className="text-[#F5F5FF] font-normal text-base bg-[#1E1E2E] outline-none"
                                  type="password"
                                  value={val.password}
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="w-44">
                                <span className="text-[#FFFFFF] font-bold">
                                  Số tài khoản:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.account_number}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-7">
                              <div className="max-w-[176px] w-full">
                                <span className="text-[#FFFFFF] font-bold">
                                  Ngân hàng:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.bank}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="bg-[#2F2F41] h-[260px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                  <Link
                    to={`/contract/managecontract/detail/${id}/updateExploitation`}>
                    <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                      </div>

                      <span className="text-[#FFFFFF] text-center font-medium text-xs">
                        Chỉnh sửa hợp đồng
                      </span>
                    </div>
                  </Link>

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
                        <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                          <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                            <i className="fa-solid fa-x text-[#FF4747] text-2xl font-bold"></i>
                          </div>

                          <span className="text-[#FFFFFF] text-center font-medium text-xs">
                            Hủy hợp đồng
                          </span>
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
                                Hủy hợp đồng khai thác
                              </p>
                            </div>
                            <div className="w-full">
                              <textarea
                                className="w-full bg-[#2B2B3F] text-[#727288] rounded-xl px-2 py-2 focus:border-none"
                                placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng khai thác này..."
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
                                Hủy hợp đồng
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
        <div>error</div>
      )}
    </>
  );
};

export default DetailContract;
