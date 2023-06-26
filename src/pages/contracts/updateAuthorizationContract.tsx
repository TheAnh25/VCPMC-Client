import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { DatePicker, Select } from "antd";
import "../../sass/datePicker.scss";
import {
  optionsCountry,
  optionsStatusContract,
} from "../../constants/optionsSelect";
import CheckBoxItem from "../../components/checkboxItem";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const UpdateAuthorizationContract: React.FC = () => {
  const { id } = useParams();
  const [contract, setContract] = useState([]);
  const [nameContract, setNameContract] = useState("");

  const [values, setValues] = useState({
    number: "",
    name: "",
    authorized: "",
    phone: "",
    identification: "",
    country: "",
    tax: "",
    address: "",
    email: "",
    account_login: "",
    password: "",
    account_number: "",
    bank: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4444/contract/" + id)
      .then((res) => {
        setContract(res.data);
        setNameContract(res.data[0].number);
        setValues({
          ...values,
          number: res.data[0].number,
          name: res.data[0].name,
          authorized: res.data[0].authorized,
          phone: res.data[0].phone,
          identification: res.data[0].identification,
          country: res.data[0].country,
          tax: res.data[0].tax,
          address: res.data[0].address,
          email: res.data[0].email,
          account_login: res.data[0].account_login,
          password: res.data[0].password,
          account_number: res.data[0].account_number,
          bank: res.data[0].bank,
        });
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
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Quản lý hợp đồng
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Chi tiết
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>
                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Chỉnh sửa thông tin
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Hợp đồng uỷ quyền bài hát - {nameContract}
              </span>
            </div>
            {/* Cotent Record  */}
            {contract.map((val: any) => {
              return (
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1541px] w-full flex flex-col gap-5">
                    <div className=" flex justify-between">
                      {/* cột 1 */}
                      <div className=" flex flex-col gap-3 w-[500px]">
                        <div className="flex gap-7">
                          <div className="w-36 flex gap-2 items-center">
                            <span className="text-[#FFFFFF] font-bold">
                              Số hợp đồng:
                            </span>
                            <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                          </div>
                          <div>
                            <input
                              className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                              type="text"
                              value={values.number}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  number: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="flex  gap-7">
                          <div className="w-36 flex gap-2 items-center">
                            <span className="text-[#FFFFFF] font-bold">
                              Tên hợp đồng:
                            </span>
                            <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                          </div>
                          <div>
                            <input
                              className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                              type="text"
                              value={values.name}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="flex  gap-7">
                          <div className="w-36 flex gap-2 items-center">
                            <span className="text-[#FFFFFF] font-bold">
                              Ngày hiệu lực:
                            </span>
                            <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                          </div>
                          <div>
                            <DatePicker
                              placeholder="yy/mm/dd"
                              className="w-[197px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                            />
                          </div>
                        </div>
                        <div className="flex  gap-7">
                          <div className="w-36 flex gap-2 items-center">
                            <span className="text-[#FFFFFF] font-bold">
                              Ngày hết hạn:
                            </span>
                            <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                          </div>
                          <div>
                            <DatePicker
                              placeholder="yy/mm/dd"
                              className="w-[197px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                            />
                          </div>
                        </div>
                        <div className="flex  gap-7">
                          <div className="w-36 flex gap-2 items-center">
                            <span className="text-[#FFFFFF] font-bold">
                              Tình trạng:
                            </span>
                            <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                          </div>
                          <div>
                            <Select
                              options={optionsStatusContract}
                              defaultValue={optionsStatusContract[0].value}
                              style={{
                                width: 197,
                              }}
                            />
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
                        <div>
                          <input
                            className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-1 text-[#595965] outline-none text-base font-normal"
                            type="file"
                          />
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
                    <div className="w-full border-[1px] border-solid border-[#727288]"></div>
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
                            <div className="flex gap-5">
                              <CheckBoxItem titleCheckbox="Cá nhân" />
                              <CheckBoxItem titleCheckbox="Tổ chức" />
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-48 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Tên người uỷ quyền:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.authorized}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    authorized: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-48 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Ngày sinh:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <DatePicker
                                placeholder="yy/mm/dd"
                                className="w-[197px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                              />
                            </div>
                          </div>

                          <div className="flex  gap-7">
                            <div className="w-48 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Giới tính:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div className="flex gap-10">
                              <CheckBoxItem titleCheckbox="Nam" />
                              <CheckBoxItem titleCheckbox="Nữ" />
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-48 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Quốc tịch:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <Select
                                options={optionsCountry}
                                defaultValue={optionsCountry[0].value}
                                style={{
                                  width: 197,
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex  gap-7">
                            <div className="w-48">
                              <span className="text-[#FFFFFF] font-bold">
                                Số điện thoại:
                              </span>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.phone}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        {/* cột 2 */}
                        <div className=" flex flex-col gap-3 w-[450px]">
                          <div className="flex gap-7">
                            <div className="w-36 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Số CMND/ CCCD:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.identification}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    identification: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="flex gap-7">
                            <div className="w-36 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Ngày cấp:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <DatePicker
                                placeholder="yy/mm/dd"
                                className="w-[197px] bg-[#2B2B3F] border-[1px] border-solid border-[#727288]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="w-36 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Nơi cấp:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.country}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    country: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="w-36">
                              <span className="text-[#FFFFFF] font-bold">
                                Mã số thuế:
                              </span>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.tax}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    tax: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="max-w-[144px] w-full">
                              <span className="text-[#FFFFFF] font-bold">
                                Nơi cư trú:
                              </span>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.address}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    address: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        {/* cột 3 */}
                        <div className=" flex flex-col gap-3">
                          <div className="flex gap-7">
                            <div className="w-44 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Email:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.email}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="w-44 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Tài khoản đăng nhập:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.account_login}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    account_login: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="w-44 flex gap-2 items-center">
                              <span className="text-[#FFFFFF] font-bold">
                                Mật khẩu:
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="password"
                                value={values.password}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    password: e.target.value,
                                  })
                                }
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
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.account_number}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    account_number: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <div className="max-w-[176px] w-full">
                              <span className="text-[#FFFFFF] font-bold">
                                Ngân hàng:
                              </span>
                            </div>
                            <div>
                              <input
                                className="text-[#727288] h-8 px-2 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                                type="text"
                                value={values.bank}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    bank: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
              <span className="text-[#F5F5FF] text-xs font-normal">
                là những trường thông tin bắt buộc
              </span>
            </div>
            <div className="flex justify-center items-center gap-8 ">
              <Link
                to={`/contract/managecontract/detailAuthorizationContract/${id}`}>
                <div className="button-cancel">
                  <button className="px-6 py-3 text-[#FF7506]">Hủy</button>
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
      </div>
    </>
  );
};

export default UpdateAuthorizationContract;
