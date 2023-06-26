import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { DatePicker, Select } from "antd";
import "../../sass/datePicker.scss";
import {
  optionsCategoryRecord,
  optionsCountry,
} from "../../constants/optionsSelect";
import CheckBoxItem from "../../components/checkboxItem";
import { Link } from "react-router-dom";
import UploadFile from "../../components/uploadFile";

const AddNewRecord: React.FC = () => {
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
                    Thêm bản ghi
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Thêm thông tin bản ghi
              </span>
            </div>
            {/* Cotent Record  */}
            <div className="bg-[#2B2B3F] rounded-2xl w-[670px] h-[568px] mx-auto">
              <div className="px-10 py-10 flex flex-col gap-7">
                <div className="flex justify-center items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0FBF00] text-center">
                    <i className="fa-solid fa-check text-[#FFFFFF] text-2xl font-bold"></i>
                  </div>
                  <span className="text-[#FFFFFF] text-2xl font-bold">
                    Hợp đồng đã được tạo thành công
                  </span>
                </div>
                <div className="border-[1px] border-solid border-[#C8C8DB]"></div>
                <div className="flex flex-col gap-4">
                  <span className="text-[#FFFFFF] text-2xl font-bold">
                    Có 2 cách để tạo bản ghi:
                  </span>
                  <div className="flex flex-col gap-14 ml-6">
                    <div className=" flex flex-col gap-3">
                      <span className="text-[#FF7506] text-[14px] font-bold">
                        Cách 1:{" "}
                        <span className="text-[#FFFFFF]">
                          Upload bản ghi trực tiếp
                        </span>{" "}
                      </span>
                      <div className="flex flex-col gap-3 ml-16">
                        <span className="text-[14px] text-white">
                          Bạn có thể thực hiện thêm bản ghi ngay trên website
                        </span>
                        <div
                          onClick={toggleModal}
                          className="button-primary w-64">
                          <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                            Thêm bản ghi trực tiếp
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3">
                      <span className="text-[#FF7506] text-[14px] font-bold">
                        Cách 1:{" "}
                        <span className="text-[#FFFFFF]">
                          Upload bản ghi qua phần mềm
                        </span>{" "}
                      </span>
                      <div className="flex flex-col gap-3 ml-16">
                        <span className="text-[14px] text-white">
                          Bạn có thể thêm bản ghi bằng tool
                        </span>
                        <div className="button-cancel w-64">
                          <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                            Thêm bản ghi bằng tool
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-base text-[#FF4747]">
                  Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
                </span>
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <div className="top-[22%] px-4 py-3 left-[30%] bg-[#2B2B3F] w-[900px] h-[710px] rounded-2xl absolute">
            <div className=" p-4 flex flex-col items-center justify-center gap-6">
              <div>
                <p className="text-[#FFFFFF] text-2xl font-bold ">
                  Thêm bản ghi mới
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                {/* Tên bản ghi: */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-[#F5F5FF] text-base font-bold">
                      Tên bản ghi:
                    </span>
                    <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                  </div>
                  <div>
                    <input
                      className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                      type="text"
                    />
                  </div>
                </div>
                {/* Mã ISRC  */}
                <div className="flex flex-col gap-2">
                  <span className="text-[#F5F5FF] text-base font-bold">
                    Mã ISRC:
                  </span>
                  <div>
                    <input
                      className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                      type="text"
                    />
                  </div>
                </div>
                {/* Tác giả  */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-[#F5F5FF] text-base font-bold">
                      Tác giả:
                    </span>
                    <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                  </div>
                  <div>
                    <input
                      className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                      type="text"
                    />
                  </div>
                </div>
                {/* Ca sĩ */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-[#F5F5FF] text-base font-bold">
                      Ca sĩ/Nhóm nhạc:
                    </span>
                    <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                  </div>
                  <div>
                    <input
                      className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                      type="text"
                    />
                  </div>
                </div>
                {/* Thể loại && Nhà sản xuất */}
                <div className="flex gap-4">
                  {/* Thể loại */}
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Ca sĩ/Nhóm nhạc:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <Select
                        options={optionsCategoryRecord}
                        defaultValue={optionsCategoryRecord[0].value}
                        style={{
                          width: 400,
                        }}
                      />
                    </div>
                  </div>
                  {/* Nhà sản xuất*/}
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Nhà sản xuất:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <input
                        className="rounded-lg border-[1px] bg-[#2B2B3F] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#595965] outline-none text-base font-normal"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                {/* Đính kèm tệp ghi && Đính kèm tệp phát  */}
                <div className="flex gap-4">
                  {/* Đính kèm tệp ghi */}
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Đính kèm bản ghi:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <UploadFile />
                  </div>
                  {/* Đính kèm tệp phát*/}
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#F5F5FF] text-base font-bold">
                        Đính kèm lời bài hát:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <UploadFile />
                  </div>
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
    </>
  );
};

export default AddNewRecord;
