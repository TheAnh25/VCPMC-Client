import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import { DatePicker, Select } from "antd";
import CheckBoxItem from "../../components/checkboxItem";
import CheckBox from "../../components/checkbox";
import Paginations from "../../components/pagination";
import { optionsStatusContract } from "../../constants/optionsSelect";
initTE({ Modal, Ripple });

const DetailAuthorizationContract: React.FC = () => {
  const { id } = useParams();
  const [contract, setContract] = useState([]);
  const [nameContract, setNameContract] = useState("");
  const [isTable, setIsTable] = useState<boolean>(true);
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [record, setRecord] = useState([]);

  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleClickIsTable = () => {
    setIsTable(true);
  };

  const handleClickIsNotTable = () => {
    setIsTable(false);
  };
  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/contract/" + id)
      .then((res) => {
        setContract(res.data);
        setNameContract(res.data[0].number);
      })
      .catch((err) => {
        console.log(err);
      });
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
                  Chi tiết hợp đồng uỷ quyền bài hát - {nameContract}
                </span>
              </div>

              <div className=" flex items-center">
                <div onClick={handleClickIsTable} className="cursor-pointer">
                  {isTable ? (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Thông tin hợp đồng
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="border-[1px] border-[#FF7506] border-solid rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-normal">
                          Thông tin hợp đồng
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
                          Tác phẩm uỷ quyền
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#FF7506] rounded-full">
                      <div className="px-6 py-2">
                        <span className="text-base text-[#FFFFFF] font-semibold">
                          Tác phẩm uỷ quyền
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Cotent Record  */}
              {isTable ? (
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
                                  {new Date(val.end_date).toLocaleDateString(
                                    "en-GB"
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="flex  gap-7">
                              <div className="w-36">
                                <span className="text-[#FFFFFF] font-bold">
                                  Tình trạng:
                                </span>
                              </div>
                              {val.status ? (
                                <div className=" flex  items-center gap-1">
                                  <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                  <p className="text-[#F5F5FF] font-normal text-base">
                                    Còn thời hạn
                                  </p>
                                </div>
                              ) : (
                                <div className=" flex items-center gap-1">
                                  <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                  <p className="text-[#F5F5FF] font-normal text-base">
                                    Đã huỷ
                                  </p>
                                </div>
                              )}
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
                          <div className=" flex flex-col gap-3">
                            <div className="flex gap-4 text-[#FFAC69] text-base font-bold">
                              <div>
                                <i className="fa-solid fa-circle-info"></i>
                              </div>
                              <div>
                                <span>Mức nhuận bút</span>
                              </div>
                            </div>
                            <div className="flex justify-between gap-7">
                              <div>
                                <span className="text-[#FFFFFF] font-bold">
                                  Quyền tác giả:
                                </span>
                              </div>
                              <div>
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  0%
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <div>
                                <span className="text-[#FFFFFF] font-bold">
                                  Quyền liên quan:
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <div className="flex justify-between gap-7">
                                  <div>
                                    <span className="text-[#FFFFFF]">
                                      Quyền của người biểu diễn:
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[#F5F5FF] font-normal text-base">
                                      50%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between gap-7">
                                  <div>
                                    <span className="text-[#FFFFFF]">
                                      Quyền của nhà sản xuất: (Bản ghi/video)
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[#F5F5FF] font-normal text-base">
                                      50%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <span className="text-[#FFAC69] text-[18px] font-bold">
                            Thông tin pháp nhân uỷ quyền
                          </span>
                          <div className=" flex justify-between">
                            {/* cột 1 */}
                            <div className=" flex flex-col gap-3 w-[500px]">
                              <div className="flex  gap-7">
                                <div className="w-48">
                                  <span className="text-[#FFFFFF] font-bold">
                                    Pháp nhân uỷ quyền:
                                  </span>
                                </div>
                                {val.authenticated_party ? (
                                  <div>
                                    <span className="text-[#F5F5FF] font-normal text-base">
                                      Tổ chức
                                    </span>
                                  </div>
                                ) : (
                                  <div>
                                    <span className="text-[#F5F5FF] font-normal text-base">
                                      Cá nhân
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="flex  gap-7">
                                <div className="w-48">
                                  <span className="text-[#FFFFFF] font-bold">
                                    Tên người uỷ quyền:
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[#F5F5FF] font-normal text-base">
                                    {val.authorized}
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
                              <div className="flex  gap-7">
                                <div className="w-48">
                                  <span className="text-[#FFFFFF] font-bold">
                                    Quốc tịch:
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[#F5F5FF] font-normal text-base">
                                    {val.nationality}
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
                            </div>
                            {/* cột 2 */}
                            <div className=" flex flex-col gap-3 w-[450px]">
                              <div className="flex gap-7">
                                <div className="w-32">
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
                                <div className="w-32">
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
                                <div className="w-32">
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
                                <div className="w-32">
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
                                <div className="max-w-[128px] w-full">
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
                                    Email:
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[#F5F5FF] font-normal text-base">
                                    {val.email}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-7">
                                <div className="w-44">
                                  <span className="text-[#FFFFFF] font-bold">
                                    Tài khoản đăng nhập:
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
                  <div className="bg-[#2F2F41] h-[360px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                    <Link
                      to={`/contract/managecontract/detailAuthorizationContract/${id}/update`}>
                      <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                        </div>

                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Chỉnh sửa hợp đồng
                        </span>
                      </div>
                    </Link>

                    <button onClick={toggleModal}>
                      <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-clipboard text-[#FF7506] text-2xl font-bold"></i>
                        </div>
                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Gia hạn hợp đồng
                        </span>
                      </div>
                    </button>

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
                                  Hủy hợp đồng uỷ quyền
                                </p>
                              </div>
                              <div className="w-full">
                                <textarea
                                  className="w-full bg-[#2B2B3F] text-[#727288] rounded-xl px-2 py-2 focus:border-none"
                                  placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
              ) : (
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1541px] w-full flex-col gap-6">
                    <div className="max-w-full flex justify-between">
                      <div className="flex  w-full gap-16">
                        {/* Thể loại: */}
                        <div className=" flex gap-4 items-center">
                          <span className="font-semibold text-base text-[#FFFFFF]">
                            Tình trạng phê duyệt
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
                        {/* Định dạng  */}
                      </div>
                      <div className="max-w-[517px] w-full">
                        <div className="flex cursor-pointer gap-1 items-center bg-[#2B2B3F] max-h-11 h-full px-6 py-3 rounded-lg ">
                          <input
                            className=" focus:outline-none text-base  bg-[#2B2B3F] font-normal text-[#727288] w-full h-full"
                            placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
                          />
                          <i className="fa-solid fa-magnifying-glass text-[#F5F5FF]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2F2F41] mt-6 flex flex-col justify-between gap-[50px] h-[572px] rounded-2xl">
                      <div className="w-full shrink-0 flex ">
                        <thead>
                          <table className="shadow-lg w-full table-fixed tab">
                            <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                              <th className="w-16">STT</th>
                              <th className="w-[252px]">Tên bản ghi</th>
                              <th>Mã ISRC</th>
                              <th>Ca sĩ</th>
                              <th>Tác giả</th>
                              <th>Ngày tải</th>
                              <th>Tình trạng</th>
                              <th className="w-28"></th>
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
                                    <td className="">
                                      <div className="flex flex-col">
                                        <span>{val.name_record}</span>
                                        <div className="flex  gap-1 items-center">
                                          <span>{val.category}</span>
                                          <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                          <span>{val.format}</span>
                                          <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                          <span>{val.duration}</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-center ">
                                      {val.id_isrc}
                                    </td>
                                    <td className="text-center  ">
                                      {val.singer}
                                    </td>
                                    <td className="text-center  ">
                                      {val.auth}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td className="text-center">
                                      {val.status === "Mới" && (
                                        <td className="text-center ">
                                          <div className=" flex  items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                                            <p>Mới</p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === "Đã phê duyệt" && (
                                        <td className="text-center ">
                                          <div className=" flex  items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                            <p>Đã phê duyệt</p>
                                          </div>
                                        </td>
                                      )}
                                      {val.status === "Bị từ chối" && (
                                        <td className="text-center">
                                          <div className=" flex items-center gap-1">
                                            <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                                            <p>Bị từ chối</p>
                                          </div>
                                        </td>
                                      )}
                                    </td>

                                    <td>
                                      <td className=" flex justify-center  text-[#FF7506] underline text-xs font-semibold">
                                        Nghe
                                      </td>
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
                  <div className="bg-[#2F2F41] h-[460px] hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                    {/* Chỉnh sửa  */}
                    <Link
                      to={`/contract/managecontract/detailAuthorizationContract/${id}/updateRecord`}>
                      <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                        </div>

                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Chỉnh sửa tác phẩm
                        </span>
                      </div>
                    </Link>
                    {/* Gia hạn  */}
                    <button onClick={toggleModal}>
                      <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-clipboard text-[#FF7506] text-2xl font-bold"></i>
                        </div>
                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Gia hạn hợp đồng
                        </span>
                      </div>
                    </button>
                    {/* Hủy */}
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
                              <i className="fa-solid fa-clock-rotate-left text-[#FF7506] text-2xl font-bold"></i>
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
                                  Hủy hợp đồng uỷ quyền
                                </p>
                              </div>
                              <div className="w-full">
                                <textarea
                                  className="w-full bg-[#2B2B3F] text-[#727288] rounded-xl px-2 py-2 focus:border-none"
                                  placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
                    {/* Thêm bản ghi  */}

                    <Link to="/contract/managecontract/addNewRecord">
                      <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                          <i className="fa-solid fa-plus text-[#FF4747] text-2xl font-bold"></i>
                        </div>

                        <span className="text-[#FFFFFF] text-center font-medium text-xs">
                          Thêm bản ghi
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {modal && (
            <div className="top-[10%] px-4 py-3 left-[30%] bg-[#2B2B3F] w-[900px] h-[600px] rounded-2xl absolute">
              <div className=" p-4 flex flex-col items-center justify-center gap-6">
                <div>
                  <p className="text-[#FFFFFF] text-2xl font-bold ">
                    Hủy hợp đồng uỷ quyền
                  </p>
                </div>
                <div className="w-full flex gap-10">
                  <div className="flex flex-col gap-24">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#FFFFFF] font-bold">
                          Số hợp đồng:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <span className="text-base text-white font-bold">
                        Từ ngày:{" "}
                        <span className=" font-normal">02/08/2021</span>
                      </span>
                      <div className="flex  gap-2">
                        <span className="text-[#FFFFFF] font-bold">
                          Đến ngày:
                        </span>
                        <div>
                          <DatePicker
                            placeholder="yy/mm/dd"
                            className="w-[120px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                          />
                        </div>
                      </div>
                      <div className="w-[257px] text-xs text-[#FFD0AB]">
                        <span>
                          Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được
                          tính sau ngày hết hạn hợp đồng cũ một ngày.
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-7 ">
                      <div>
                        <span className="text-[#FFFFFF] font-bold">
                          Đính kèm tệp:
                        </span>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-1 text-[#595965] outline-none text-base font-normal"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#FFFFFF] font-bold">
                        Mức nhuận bút
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CheckBoxItem titleCheckbox="Quyền tác giả" />
                      <input
                        type="text"
                        className="bg-[#2B2B3F] text-white h-10 w-12 px-2 outline-none border-[1px] border-solid rounded-lg"
                      />
                      <span className="text-white">%</span>
                    </div>
                    <div onChange={handleChecked}>
                      <CheckBox
                        isChecked={isChecked}
                        titleCheckbox="Quyền liên quan:"
                      />
                    </div>
                    {isChecked ? (
                      <div className="flex flex-col gap-2">
                        <div className="ml-4 flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <CheckBox
                              isChecked={isChecked}
                              titleCheckbox="Quyền của người biểu diễn"
                            />
                            <input
                              type="text"
                              className="bg-[#2B2B3F] text-white h-10 w-12 px-2 outline-none border-[1px] border-solid rounded-lg"
                            />
                            <span className="text-white">%</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckBox
                              isChecked={isChecked}
                              titleCheckbox="Quyền của nhà sản xuất ( bản ghi / video )"
                            />
                            <input
                              type="text"
                              className="bg-[#2B2B3F] text-white h-10 w-12 px-2 outline-none border-[1px] border-solid rounded-lg"
                            />
                            <span className="text-white">%</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="ml-4 flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <CheckBoxItem titleCheckbox="Quyền của người biểu diễn" />
                            <input
                              type="text"
                              className="bg-[#2B2B3F] text-white h-10 w-12 px-2 outline-none border-[1px] border-solid rounded-lg"
                            />
                            <span className="text-white">%</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckBoxItem titleCheckbox="Quyền của nhà sản xuất ( bản ghi / video )" />
                            <input
                              type="text"
                              className="bg-[#2B2B3F] text-white h-10 w-12 px-2 outline-none border-[1px] border-solid rounded-lg"
                            />
                            <span className="text-white">%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-8  mt-10">
                <div className="button-cancel">
                  <button
                    onClick={toggleModal}
                    className="px-6 py-3 text-[#FF7506]">
                    Hủy
                  </button>
                </div>

                <div className="button-primary">
                  <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

export default DetailAuthorizationContract;
