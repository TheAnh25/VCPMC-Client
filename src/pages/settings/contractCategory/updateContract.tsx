import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

interface CategoryContract {
  id: number;
  name: string;
  persent: string;
  expire_date: string;
}

const UpdateContract: React.FC = () => {
  const [infoContrac, setInfoContract] = useState([]);
  const [editableRow, setEditableRow] = useState<CategoryContract | null>(null);

  const handleRowClick = (row: CategoryContract) => {
    setEditableRow(row);
  };

  const [values, setValues] = useState({
    name: "",
    persent: "",
    expire_date: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4444/category_contract")
      .then((res) => {
        setInfoContract(res.data);
        setValues({
          ...values,
          name: res.data[0].name,
          persent: res.data[0].persent,
          expire_date: res.data[0].expire_date,
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
        <div className="w-full flex flex-col gap-6">
          <Header />

          <div className="ml-[60px] flex flex-col justify-between max-h-[80vh] h-full">
            <div className="flex flex-col gap-6">
              <div className=" flex flex-col gap-[2px]">
                <div className="flex gap-4 items-center h-[30px]">
                  <div>
                    <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                      Cài đặt
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                  </div>

                  <div>
                    <p className="text-[#FF7506] text-[16px] font-semibold ">
                      Quản lý loại hợp đồng
                    </p>
                  </div>
                </div>
                <span className="text-[#FFFFFF] text-4xl font-bold">
                  Loại hợp đồng
                </span>
              </div>
              <div className="w-full flex justify-between">
                <div className="max-w-[1541px] w-full flex gap-6">
                  <div className="bg-[#2F2F41] w-[870px] rounded-2xl">
                    <div className="shrink-0 flex ">
                      <thead>
                        <table className="shadow-lg w-full table-fixed tab">
                          <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                            <th className="w-16">STT</th>
                            <th>Loại hợp đồng</th>
                            <th className="w-96">
                              Doanh thu VCPCM/hợp đồng (Đơn vị: %){" "}
                            </th>
                            <th>Ngày áp dụng</th>
                          </tr>
                          {infoContrac?.map((val: any) => {
                            return (
                              <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                                <tr
                                  key={val.id}
                                  onClick={() => handleRowClick(val)}
                                  className="text[#535261] text-[14px] font-normal ">
                                  <td className="text-center py-3 ">
                                    {val.id}
                                  </td>
                                  <td className="text-center">
                                    {editableRow === val ? (
                                      <input
                                        className="bg-[#33334D] w-20 text-[#727288] rounded px-2 outline-none"
                                        type="text"
                                        value={values.name}
                                        onChange={(e) =>
                                          setValues({
                                            ...values,
                                            name: e.target.value,
                                          })
                                        }
                                      />
                                    ) : (
                                      val.name
                                    )}
                                  </td>
                                  <td className="text-center">
                                    {editableRow === val ? (
                                      <input
                                        className="bg-[#33334D] w-20 text-[#727288] rounded px-2 outline-none"
                                        type="text"
                                        value={values.persent}
                                        onChange={(e) =>
                                          setValues({
                                            ...values,
                                            persent: e.target.value,
                                          })
                                        }
                                      />
                                    ) : (
                                      val.persent
                                    )}
                                  </td>
                                  <td className="text-center">
                                    {editableRow === val ? (
                                      <input
                                        className="bg-[#33334D] w-20 text-[#727288] rounded px-2 outline-none"
                                        type="text"
                                        value={values.expire_date}
                                        onChange={(e) =>
                                          setValues({
                                            ...values,
                                            expire_date: e.target.value,
                                          })
                                        }
                                      />
                                    ) : (
                                      val.expire_date
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      </thead>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2F2F41] w-[112px] h-[240px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                  {/* Chỉnh sửa  */}

                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-plus text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Thêm lịch áp dụng
                    </span>
                  </div>

                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-trash text-[#FF4747] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Xóa
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8 ">
              <Link to="/setting/categorycontract">
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

export default UpdateContract;
