import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

const ContractCategory: React.FC = () => {
  const [catecoryContract, setCatecoryContract] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4444/category_contract")
      .then((res) => {
        setCatecoryContract(res.data);
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

            {/* Cotent   */}
            <div className="flex gap-10 justify-between ">
              <div className="max-w-[1541px] w-full flex gap-6">
                <div className="bg-[#2F2F41] w-[870px] rounded-2xl">
                  <div className="shrink-0 flex ">
                    <thead>
                      <table className="shadow-lg w-full table-fixed tab">
                        <tr className="text-[#FFAC69] text-base font-bold bg-[#2F2F41]">
                          <th className="w-16">STT</th>
                          <th>Loại hợp đồng</th>
                          <th>Doanh thu VCPCM/hợp đồng (Đơn vị: %) </th>
                        </tr>
                        {catecoryContract?.map((val: any) => {
                          return (
                            <tbody className="bg-[#2F2F41] text-[#FFFFFF]">
                              <tr
                                key={val.id}
                                className="text[#535261] text-[14px] font-normal ">
                                <td className="text-center py-3 ">{val.id}</td>
                                <td className="text-center">{val.name}</td>
                                <td className="">{val.persent}</td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </thead>
                  </div>
                </div>
                <div className="bg-[#2F2F41] rounded-2xl">
                  <div className="px-6 py-6 flex flex-col gap-10">
                    <span className="text-[#E5E5E5] font-bold text-2xl">
                      Cảnh báo hết hạn khai thác tác phẩm
                    </span>
                    <span className="text-[#E5E5E5] font-bold text-lg">
                      Hợp đồng được cảnh báo trước thời gian hết hạn: 365 ngày
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2F2F41] w-[112px] h-[280px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-5 justify-center items-center">
                {/* Chỉnh sửa  */}
                <Link to="/setting/categorycontract/updateContract">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-pen-to-square text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Chỉnh sửa loại hợp đồng
                    </span>
                  </div>
                </Link>
                <Link to="/setting/categorycontract/updateWarning">
                  <div className="bg-[#2F2F41] hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-file-pen text-[#FF7506] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Chỉnh sửa cảnh báo hết hạn
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractCategory;
