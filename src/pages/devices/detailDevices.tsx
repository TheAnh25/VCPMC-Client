import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import { optionsCategoryRecord } from "../../constants/optionsSelect";
import { Select } from "antd";
import UploadFile from "../../components/uploadFile";
import CheckBoxItem from "../../components/checkboxItem";

initTE({ Modal, Ripple });
const DetailDevices: React.FC = () => {
  const { id } = useParams();
  const [device, setDevice] = useState([]);
  const [nameDevice, setNameDevice] = useState("");

  const [valuesDevice, setValuesDevice] = useState({
    name_device: "",
    id_device: "",
    mac_address: "",
    name_login: "",
    location: "",
  });

  useEffect(() => {
    initTE({ Modal, Ripple });
    axios
      .get("http://localhost:4444/devices/" + id)
      .then((res) => {
        setDevice(res.data);
        setNameDevice(res.data[0].name_device);
        setValuesDevice({
          ...valuesDevice,
          name_device: res.data[0].name_device,
          id_device: res.data[0].id_device,
          mac_address: res.data[0].mac_address,
          name_login: res.data[0].name_login,
          location: res.data[0].location,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {device ? (
        <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl relative">
          <Navbar />
          <div className=" w-full">
            <Header />
            <div className="ml-[60px] flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Danh sách thiết bị
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Chi tiết thiết bị
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Thông tin thiết bị - {nameDevice}
                </span>
              </div>

              {/* Cotent Record  */}

              <div className="flex gap-10 justify-between ">
                {device.map((val: any) => {
                  return (
                    <div className="bg-[#2B2B3F] rounded-lg max-w-[1541px] w-full ">
                      <div className="flex gap-40 px-[100px] py-6">
                        {/* Cột 1 */}
                        <div className=" flex flex-col gap-4 w-80">
                          <span className="text-[#FF7506] font-bold text-2xl">
                            Thông tin thiết bị
                          </span>
                          <div className="shrink-0 ">
                            <img
                              className="rounded-2xl w-[340px] h-[160px] object-cover"
                              src={val.image}
                              alt=""
                            />
                          </div>
                          {val.status === 1 && (
                            <div className=" flex items-center gap-1 text-[#FFFFFF]">
                              <i className="fa-solid fa-circle text-[8px] text-[#18E306]"></i>
                              <p> Hoạt động </p>
                            </div>
                          )}
                          {val.status === 0 && (
                            <div className=" flex items-center gap-1 text-[#FFFFFF]">
                              <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                              <p>Ngừng kích hoạt </p>
                            </div>
                          )}
                          {val.status === -1 && (
                            <div className=" flex items-center gap-1 text-[#FFFFFF]">
                              <i className="fa-solid fa-circle text-[8px] text-[#FF4747]"></i>
                              <p>Đang bị khoá</p>
                            </div>
                          )}
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Ghi chú:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.note}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Cột 2 */}
                        <div className=" flex flex-col gap-4 w-96">
                          <span className="text-[#FF7506] font-bold text-2xl">
                            {nameDevice}
                          </span>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                SKU/ID:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.id_device}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Địa chỉ Mac:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.mac_address}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Tên đăng nhập:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.name_login}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Định dạng:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.format}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="min-w-[160px] w-full">
                              <span className="text-[#FFFFFF] font-bold">
                                Vị trí:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Thời hạn bảo hành:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {new Date(val.date_contract).toLocaleDateString(
                                  "en-GB"
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-40">
                              <span className="text-[#FFFFFF] font-bold">
                                Trạng thái thiết bị:
                              </span>
                            </div>
                            <div className="">
                              <span className="text-[#F5F5FF] font-normal text-base">
                                {val.status_device}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Cột 3  */}
                        <div className="flex flex-col gap-[112px]">
                          {/* Phiên bản  */}
                          <div className=" flex flex-col gap-4">
                            <span className="text-[#FF7506] font-bold text-2xl">
                              Thông tin phiên bản
                            </span>

                            <div className="flex gap-4">
                              <div className="w-40">
                                <span className="text-[#FFFFFF] font-bold">
                                  Phiên bản cũ nhất:
                                </span>
                              </div>
                              <div className="">
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.version}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Dung lượng */}
                          <div className=" flex flex-col gap-4">
                            <span className="text-[#FF7506] font-bold text-2xl">
                              Dung lượng bộ nhớ
                            </span>

                            <div className="flex gap-4">
                              <div className="w-24">
                                <span className="text-[#FFFFFF] font-bold">
                                  Dung lượng
                                </span>
                              </div>
                              <div className="">
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.limit_memory}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-24">
                                <span className="text-[#FFFFFF] font-bold">
                                  Còn trống
                                </span>
                              </div>
                              <div className="">
                                <span className="text-[#F5F5FF] font-normal text-base">
                                  {val.empty_memory}
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
                  <button onClick={toggleModal}>
                    <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                        <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                      </div>

                      <span className="text-[#FFFFFF] text-center font-medium text-xs">
                        Chỉnh sửa
                      </span>
                    </div>
                  </button>

                  <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-regular fa-lock text-[#FF7506] text-2xl font-bold"></i>
                    </div>
                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Khôi phục mật khẩu
                    </span>
                  </div>

                  <div className="bg-[#2F2F41] hover:cursor-pointer px-2 rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-repeat text-[#FF7506] text-2xl font-bold"></i>
                    </div>
                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Khôi phục bộ nhớ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {modal && (
            <div className="top-[10%] px-4 py-3 left-[40%] bg-[#2B2B3F] w-[600px] h-[710px] rounded-2xl absolute">
              <div className=" p-4 flex flex-col items-center justify-center gap-6">
                <div>
                  <p className="text-[#FFFFFF] text-2xl font-bold ">
                    Chỉnh sửa thông tin thiết bị
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4">
                  {/*  Tên thiết bị:  */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Tên thiết bị:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={valuesDevice.name_device}
                        onChange={(e) =>
                          setValuesDevice({
                            ...valuesDevice,
                            name_device: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* SKU/ID:  */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[#F5F5FF] text-base font-bold">
                      SKU/ID:
                    </span>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={valuesDevice.id_device}
                        onChange={(e) =>
                          setValuesDevice({
                            ...valuesDevice,
                            id_device: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Địa chỉ Mac:  */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Địa chỉ Mac:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={valuesDevice.mac_address}
                        onChange={(e) =>
                          setValuesDevice({
                            ...valuesDevice,
                            mac_address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Tên đăng nhập:  */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Tên đăng nhập:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={valuesDevice.name_login}
                        onChange={(e) =>
                          setValuesDevice({
                            ...valuesDevice,
                            name_login: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Vị trí:  */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Vị trí:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                        value={valuesDevice.location}
                        onChange={(e) =>
                          setValuesDevice({
                            ...valuesDevice,
                            location: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Vị trí:  */}
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Trạng thái thiết bị:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <CheckBoxItem titleCheckbox="Đã kích hoạt" />
                    <CheckBoxItem titleCheckbox="Ngưng kích hoạt" />
                  </div>

                  {/* Button  */}
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

export default DetailDevices;
