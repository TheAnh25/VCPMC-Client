import React from "react";
import mcpmc_logo from "../assets/images/vcpmc_logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#020220] max-w-[170px] w-full">
        <Link to="/users">
          <div className="bg-[#FFFFFF] rounded-full w-[96px] h-[96px] mx-auto mt-10 mb-[100px]">
            <img src={mcpmc_logo} alt="" />
          </div>
        </Link>
        <div className=" h-full flex flex-col items-center text-[#C8C8DB] gap-6">
          {/* Kho bản ghi */}

          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "" : "",
                width: isActive ? "200px" : "",
                height: isActive ? "48px" : "",
                color: isActive ? "#FF7506" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/records">
            <div className="w-full  ">
              <div className="flex flex-col items-center gap-1 py-2">
                <i className="fa-solid fa-record-vinyl"></i>
                <span className="font-medium text-[14px]">Kho bản ghi</span>
              </div>
            </div>
          </NavLink>
          {/* Playlist  */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "" : "",
                width: isActive ? "200px" : "",
                height: isActive ? "48px" : "",
                color: isActive ? "#FF7506" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/playlist">
            <div className="w-full">
              <div className="flex flex-col items-center gap-1 py-2">
                <i className="fa-solid fa-list"></i>
                <span className="font-medium text-[14px]">Playlist</span>
              </div>
            </div>
          </NavLink>

          {/* Lập lịch phát */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "" : "",
                width: isActive ? "200px" : "",
                height: isActive ? "48px" : "",
                color: isActive ? "#FF7506" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/schedule">
            <div className="w-full">
              <div className="flex flex-col items-center gap-1 py-2">
                <i className="fa-solid fa-calendar-days"></i>
                <span className="font-medium text-[14px]">Lập lịch phát</span>
              </div>
            </div>
          </NavLink>

          {/* Quản lý */}

          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#FF7506" : "",
                width: isActive ? "100%" : "100%",
                height: isActive ? "48px" : "",
                color: isActive ? "#FFFFFF" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/setting">
            <div className="relative group">
              <NavLink to="/setting/managerole">
                {" "}
                <div className="w-full flex justify-center items-center gap-6">
                  <div className="flex flex-col items-center gap-1 py-2 ml-7">
                    <i className="fa-solid fa-file"></i>
                    <span className="font-medium text-[14px]">Quản lý</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </NavLink>

              <div className="invisible rounded-lg opacity-0 absolute z-30 bg-[#30303F]  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                <div className=" w-full h-[1px] bg-[#30303F] rounded-t-[10px]"></div>

                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                  {/* Thông báo 1 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/managerole">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Quản lý hợp đồng
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 2 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageaccount">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Quản lý thiết bị
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 3 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Đơn vị uỷ quyền
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  {/* Thông báo 4 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Đơn vị sử dụng
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Doanh thu */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#FF7506" : "",
                width: isActive ? "100%" : "100%",
                height: isActive ? "48px" : "",
                color: isActive ? "#FFFFFF" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/setting">
            <div className="relative group">
              <NavLink to="/setting/managerole">
                {" "}
                <div className="w-full flex justify-center items-center gap-6">
                  <div className="flex flex-col items-center gap-1 py-2 ml-7">
                    <i className="fa-solid fa-sack-dollar"></i>
                    <span className="font-medium text-[14px]">Doanh thu</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </NavLink>

              <div className="invisible rounded-lg opacity-0 absolute z-30 bg-[#30303F]  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                <div className=" w-full h-[1px] bg-[#30303F] rounded-t-[10px]"></div>

                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                  {/* Thông báo 1 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/managerole">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Báo cáo doanh thu
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 2 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageaccount">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Lịch sử đối soát
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 3 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Phân phối doanh thu
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  {/* Thông báo 4 */}
                </div>
              </div>
            </div>
          </NavLink>

          {/* Cài đặt */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#FF7506" : "",
                width: isActive ? "100%" : "100%",
                height: isActive ? "48px" : "",
                color: isActive ? "#FFFFFF" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/setting">
            <div className="relative group">
              <NavLink to="/setting/managerole">
                {" "}
                <div className="w-full flex justify-center items-center gap-6">
                  <div className="flex flex-col items-center gap-1 py-2 ml-7">
                    <i className="fa-solid fa-gear"></i>{" "}
                    <span className="font-medium text-[14px]">Cài đặt</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </NavLink>

              <div className="invisible rounded-lg opacity-0 absolute z-30 bg-[#30303F]  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                <div className=" w-full h-[1px] bg-[#30303F] rounded-t-[10px]"></div>

                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                  {/* Thông báo 1 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/managerole">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Phân quyền người dùng
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 2 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageaccount">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Cấu hình
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 3 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Quản lý hợp đồng
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  {/* Thông báo 4 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Thông tin tác phẩm
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  {/* Thông báo 5 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Chu kỳ đối soát
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Hỗ trợ */}
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#FF7506" : "",
                width: isActive ? "100%" : "100%",
                height: isActive ? "48px" : "",
                color: isActive ? "#FFFFFF" : "#C8C8DB",
                display: isActive ? "inline-block" : "",
              };
            }}
            to="/setting">
            <div className="relative group">
              <NavLink to="/setting/managerole">
                {" "}
                <div className="w-full flex justify-center items-center gap-6">
                  <div className="flex flex-col items-center gap-1 py-2 ml-7">
                    <i className="fa-regular fa-circle-question"></i>
                    <span className="font-medium text-[14px]">Hỗ trợ</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </NavLink>

              <div className="invisible rounded-lg opacity-0 absolute z-30 bg-[#30303F]  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                <div className=" w-full h-[1px] bg-[#30303F] rounded-t-[10px]"></div>

                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                  {/* Thông báo 1 */}
                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/managerole">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Hướng dẫn sử dụng
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 2 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageaccount">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Tải app
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  {/* Thông báo 3 */}

                  <div className="w-full ">
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#FF7506" : "",
                          width: isActive ? "200px" : "",
                          height: isActive ? "100%" : "",
                          color: isActive ? "#FFFFFF" : "#FFFFFF",
                          display: isActive ? "inline-block" : "",
                        };
                      }}
                      to="/setting/manageuser">
                      <div className="w-full ">
                        <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#3E3E5B] hover:text-white">
                          Feedback
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
