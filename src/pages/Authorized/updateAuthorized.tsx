import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import axios from "axios";
import "../../sass/selectedField.scss";
import { Link, useParams } from "react-router-dom";
import CheckBoxItem from "../../components/checkboxItem";
import { Select } from "antd";
import { optionsAuthorized, optionsRole } from "../../constants/optionsSelect";
import CheckBox from "../../components/checkbox";

const UpdateAuthorized: React.FC = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [detailAuthorized, setDetailAuthorized] = useState([]);

  const [valuesInfo, setValuesInfo] = useState({
    name: "",
    name_login: "",
    email: "",
    phone: "",
    password: "",
    status: true,
  });
  useEffect(() => {
    axios
      .get("http://localhost:4444/authorized/" + id)
      .then((res) => {
        setDetailAuthorized(res.data);
        setValuesInfo({
          ...valuesInfo,
          name: res.data[0].name,
          phone: res.data[0].phone,
          email: res.data[0].email,
          name_login: res.data[0].name_login,
          password: res.data[0].password,
          status: res.data[0].status,
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
                    Đơn vị sử dụng
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
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Thông tin người dùng
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
                Thông tin người dùng
              </span>
            </div>

            {/* Cotent Operators  */}
            <div className="flex gap-10 justify-between ">
              {detailAuthorized.map((val: any) => {
                return (
                  <div className=" max-w-[1541px] w-full flex justify-between">
                    {/* Cột 1 */}
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-4">
                        <div className="w-40 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên người dùng:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            readOnly
                            className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                            value={valuesInfo.name}
                            onChange={(e) =>
                              setValuesInfo({
                                ...valuesInfo,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-40 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Email:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            readOnly
                            className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                            value={valuesInfo.email}
                            onChange={(e) =>
                              setValuesInfo({
                                ...valuesInfo,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Phone:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            readOnly
                            className="text-[#727288] px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                            value={valuesInfo.phone}
                            onChange={(e) =>
                              setValuesInfo({
                                ...valuesInfo,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-40 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Vai trò:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <Select
                            options={optionsRole}
                            defaultValue={`Tất cả`}
                            style={{
                              width: 200,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Cột 2 */}
                    <div className="flex flex-col gap-3 mr-[400px]">
                      <div className="flex gap-4">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Tên đăng nhập:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            readOnly
                            className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="text"
                            value={valuesInfo.name_login}
                            onChange={(e) =>
                              setValuesInfo({
                                ...valuesInfo,
                                name_login: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Mật khẩu:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="password"
                            value={valuesInfo.password}
                            onChange={(e) =>
                              setValuesInfo({
                                ...valuesInfo,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Nhập lại mật khẩu:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        <div>
                          <input
                            className="text-[#727288] w-72 px-2 h-8 font-normal text-base bg-[#2B2B3F] border-[1px] border-solid border-[#727288] outline-none rounded-lg"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-48 flex gap-2 items-center">
                          <span className="text-[#FFFFFF] font-bold">
                            Trạng thái người dùng:
                          </span>
                          <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                        </div>
                        {valuesInfo.status ? (
                          <div className=" flex gap-8">
                            <CheckBox
                              isChecked={true}
                              titleCheckbox="Đã kích hoạt"
                            />
                            <CheckBox
                              isChecked={false}
                              titleCheckbox="Ngưng kích hoạt"
                            />
                          </div>
                        ) : (
                          <div className=" flex gap-8">
                            <CheckBox
                              isChecked={false}
                              titleCheckbox="Đã kích hoạt"
                            />
                            <CheckBox
                              isChecked={true}
                              titleCheckbox="Ngưng kích hoạt"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
              <span className="text-[#F5F5FF] text-xs font-normal">
                là những trường thông tin bắt buộc
              </span>
            </div>
            <div className="flex justify-center items-center gap-8  mt-10">
              <Link to="/contract/authorized">
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

export default UpdateAuthorized;
