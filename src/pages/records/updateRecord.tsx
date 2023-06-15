import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

import axios from "axios";

const UpdateRecord: React.FC = () => {
  const { id } = useParams();

  const [detailRecord, setDetailRecord] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/records/" + id)
      .then((res) => {
        setDetailRecord(res.data);
        setValues({
          ...values,
          nameRecord: res.data[0].name_record,
          idISRC: res.data[0].id_isrc,
          singer: res.data[0].singer,
          auth: res.data[0].auth,
          producer: res.data[0].producer,
          category: res.data[0].category,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [values, setValues] = useState({
    nameRecord: "",
    idISRC: "",
    singer: "",
    auth: "",
    producer: "",
    category: "",
  });

  // const handleSelectCategoryChange = (e: React.FormEvent<HTMLFormElement>) => {
  //   const options = Array.from(e.target.options)
  //     .filter((option) => option.selected)
  //     .map((option) => option.value);

  //   setSelectedRole(options);
  // };

  return (
    <>
      {detailRecord?.map((val: any) => {
        return (
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
                        Cập nhật thông tin
                      </p>
                    </div>
                  </div>
                  <span className="text-[#FFFFFF] text-4xl font-bold">
                    Bản ghi - {values.nameRecord}
                  </span>
                </div>

                {/* Cotent Record  */}
                <div className="flex gap-10 justify-between ">
                  <div className=" max-w-[1340px] w-full flex-col gap-6 pl-[201px]">
                    <div className="flex gap-6">
                      <div className="flex flex-col gap-6">
                        {/* Thông tin bản ghi */}
                        <div className="bg-[#2B2B3F] rounded-lg min-w-[400px] w-full">
                          <div className="px-6 mt-8 mb-4 flex flex-col gap-5">
                            <span className="text-[#FF7506] text-2xl font-bold text-center">
                              Thông tin bản ghi
                            </span>
                            {/* thumbnail */}
                            <div className="flex flex-col justify-center items-center">
                              <div>
                                <div className="relative shrink-0">
                                  <img
                                    className="w-[132px] h-[132px] rounded-full object-cover"
                                    src={val.thumbnail}
                                    alt=""
                                  />
                                </div>
                                <div className="absolute flex items-center justify-center w-[45px] h-[45px] top-[385px] left-[652px] bg-[#347AFF] opacity-70 rounded-full">
                                  <i className="fa-solid fa-camera text-[#FFFFFF] font-bold"></i>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center">
                                <i className="fa-solid fa-folder text-[#18E306]"></i>
                                <span className="text-base font-normal text-[#FFFFFF]">
                                  Matem.mp3
                                </span>
                              </div>
                              <div className=" w-full flex flex-col gap-2">
                                {/* Ngày thêm: */}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Ngày thêm:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      {new Date(
                                        val.expiry_date
                                      ).toLocaleDateString("en-GB")}
                                    </span>
                                  </div>
                                </div>
                                {/* Người tải lên: */}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Người tải lên:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      Super Admin
                                    </span>
                                  </div>
                                </div>
                                {/* Người duyệt:*/}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Người duyệt:
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className=" text-base font-normal text-[#FFFFFF] flex  justify-end">
                                      Hệ thống
                                    </span>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      (Tự động phê duyệt)
                                    </span>
                                  </div>
                                </div>
                                {/* Ngày phê duyệt:*/}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Ngày thêm:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      {new Date(
                                        val.expiry_date
                                      ).toLocaleDateString("en-GB")}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Thông tin ủy quyền */}
                        <div className="bg-[#2B2B3F] rounded-lg">
                          <div className="px-6 mt-2 mb-4 flex flex-col gap-5">
                            <span className="text-[#FF7506] text-2xl font-bold text-center">
                              Thông tin ủy quyền
                            </span>
                            {/* thumbnail */}
                            <div className="flex flex-col justify-center items-center">
                              <div className=" w-full flex flex-col gap-2">
                                {/*  Số hợp đồng: */}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Số hợp đồng:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      {val.contract_number}
                                    </span>
                                  </div>
                                </div>
                                {/*  Ngày nhận ủy quyền: */}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Ngày nhận ủy quyền:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}
                                    </span>
                                  </div>
                                </div>
                                {/* Ngày hết hạn:*/}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Ngày hết hạn:
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className=" text-base font-normal text-[#FFFFFF] flex  justify-end">
                                      {new Date(
                                        val.start_date
                                      ).toLocaleDateString("en-GB")}
                                    </span>
                                  </div>
                                </div>
                                {/* Trạng thái:*/}
                                <div className="flex justify-between">
                                  <div>
                                    <span className="text-[#FFFFFF] text-base font-bold">
                                      Trạng thái:
                                    </span>
                                  </div>
                                  <div>
                                    <span className=" text-base font-normal text-[#FFFFFF]">
                                      {val.status_expiry ? (
                                        <div className=" flex  items-center gap-1">
                                          <i className="fa-solid fa-circle text-[8px] text-[#347AFF]"></i>
                                          <p>Còn thời hạn</p>
                                        </div>
                                      ) : (
                                        <div className=" flex items-center gap-1">
                                          <i className="fa-solid fa-circle text-[8px] text-[#878890]"></i>
                                          <p>Đã hết hạn</p>
                                        </div>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Chỉnh sửa thông tin */}
                      <div className="bg-[#2B2B3F] rounded-lg max-w-[1152px] w-full">
                        <div className=" shrink-0 flex flex-col px-6 gap-6">
                          <span className="text-2xl font-bold text-[#FF7506] text-center mt-8">
                            Chỉnh sửa thông tin
                          </span>

                          {/* Thông tin */}
                          <div className="flex flex-col gap-2 mb-4  w-full">
                            {/* Tên bản ghi */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Tên bản ghi:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <input
                                  className="rounded-lg border-[1px] bg-[#727288] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#FFFFFF] outline-none text-base font-normal"
                                  type="text"
                                  value={values.nameRecord}
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      nameRecord: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/* Mã ISRC: */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Mã ISRC:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <input
                                  className="rounded-lg border-[1px] bg-[#727288] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#FFFFFF] outline-none text-base font-normal"
                                  type="text"
                                  value={values.idISRC}
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      idISRC: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/* Ca sĩ: */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Ca sĩ:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <input
                                  className="rounded-lg border-[1px] bg-[#727288] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#FFFFFF] outline-none text-base font-normal"
                                  type="text"
                                  value={values.singer}
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      singer: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/* Tác giả: */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Tác giả:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <input
                                  className="rounded-lg border-[1px] bg-[#727288] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#FFFFFF] outline-none text-base font-normal"
                                  type="text"
                                  value={values.auth}
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      auth: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/* Nhà sản xuất: */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Nhà sản xuất:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <input
                                  className="rounded-lg border-[1px] bg-[#727288] border-[#727288] border-solid w-full  px-3 py-[10px] text-[#FFFFFF] outline-none text-base font-normal"
                                  type="text"
                                  value={values.producer}
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      producer: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/* Thể loại: */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center ">
                                <span className="text-[#F5F5FF] text-base font-bold">
                                  Thể loại:
                                </span>
                                <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                              </div>
                              <div>
                                <div className="relative group">
                                  <div className="flex justify-between items-center py-[10px] px-3 gap-6 w-full h-full border-[1px] bg-[#727288] border-[#727288] border-solid rounded-lg ">
                                    <input
                                      value={values.category}
                                      type="text"
                                      className="w-full outline-none bg-[#727288] text-base cursor-pointer font-normal text-[#F5F5FF] list-none"
                                    />

                                    <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                                  </div>

                                  <div className="invisible bg-[#33334D] opacity-0 absolute   w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                                    <div className=" w-full h-[1px] bg-[#33334D] rounded-t-[10px]"></div>

                                    <div className="flex flex-col items-center w-full rounded-b-[10px]">
                                      {/* Thông báo 1 */}
                                      <div className="w-full ">
                                        <div className="px-3 py-2 rounded-t-lg flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#727288]">
                                          Pop
                                        </div>
                                      </div>

                                      {/* Thông báo 2*/}
                                      <div className="w-full ">
                                        <div className="px-3 py-2 flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#727288]">
                                          Ballad
                                        </div>
                                      </div>
                                      {/* Thông báo 3*/}
                                      <div className="w-full ">
                                        <div className="px-3 py-2  flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#727288]">
                                          Rock
                                        </div>
                                      </div>
                                      {/* Thông báo 4 */}
                                      <div className="w-full ">
                                        <div className="px-3 py-2 rounded-b-lg flex text-base font-normal text-[#FFFFFF] hover:cursor-pointer hover:bg-[#727288]">
                                          EDM
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
                    <div className="flex justify-center items-center gap-8  mt-10">
                      <Link to="/records">
                        <div className="button-cancel">
                          <button className="px-6 py-3 text-[#FF7506]">
                            Hủy
                          </button>
                        </div>
                      </Link>
                      <div className="button-primary">
                        <button className="px-6 py-3 text-[#FFFFFF] font-semibold text-base">
                          Lưu
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2F2F41] h-[130px] px-4 hover:cursor-pointer rounded-l-2xl flex flex-col gap-2 justify-center items-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#72728880] flex  justify-center items-center">
                      <i className="fa-solid fa-x text-[#FF4747] text-2xl font-bold"></i>
                    </div>

                    <span className="text-[#FFFFFF] text-center font-medium text-xs">
                      Xóa bản ghi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UpdateRecord;
