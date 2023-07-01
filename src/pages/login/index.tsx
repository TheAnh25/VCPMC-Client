import React, { useState, useEffect } from "react";
// import saovang from "../../assets/images/saovang.png";
// @ts-check
import mcpmc_logo from "../../assets/images/vcpmc_logo.png";
import yellowstar from "../../assets/images/saovang.png";
import CheckBox from "../../components/checkbox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginAction } from "../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    console.log(isChecked);
  };

  const { user, success, error } = useAppSelector((state) => state.user);

  console.log("user", user);

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loadingId = toast.loading("Loading", { duration: 300 });
    // @ts-ignore
    dispatch(loginAction(account, password));
    // // @ts-ignore
    // dispatch(clearLoginSuccess());
    toast.remove(loadingId);
  };

  useEffect(() => {
    if (user) {
      toast.success("Login success!");
      navigate("/records");
    }
    if (error) {
      if (account === "") {
        setErrorMessage("Tên đăng nhập và mật khẩu không được bỏ trống ");
      } else {
        setErrorMessage("Sai tên đăng nhập hoặc mật khẩu");
      }
    }
  }, [user, navigate, error]);

  return (
    <>
      <div className="bg-[#1E1E2E] ">
        <div className=" min-h-[116px] h-full flex justify-end items-center pr-[80px]">
          <div className="max-w-[143px] w-full max-h-[40px] h-full border-[1px] border-solid border-[#C8C8DB] text-[#FFFFFF] font-normal text-base flex gap-2 justify-center items-center rounded-lg px-2 py-[10px]">
            <p>Tiếng Việt</p>
            <div className="bg-red-600 rounded-full w-[22px] h-[22px] flex justify-center items-center">
              <img src={yellowstar} alt="" />
            </div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="h-[812px] flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="bg-[#FFFFFF] rounded-full w-[240px] h-[240px]">
                <img src={mcpmc_logo} alt="" />
              </div>
              <div className="text-[#FFFFFF] font-bold text-4xl mb-7 mt-10 flex justify-center">
                Đăng nhập
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmitLogin}>
                {errorMessage ? (
                  <div>
                    <div className="flex flex-col gap-2 mb-5">
                      <span className="text-[#FFFFFF] font-semibold text-base opacity-70">
                        Tên đăng nhập
                      </span>
                      <input
                        className="bg-[#2B2B3F] outline-none rounded-lg min-w-[471px] w-full min-h-[48px] h-full text-[#F5F5FF] border-[1px] border-solid border-red-600  text-base font-normal px-4 py-3 "
                        type="text"
                        name="name"
                        onChange={(e) => setAccount(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="flex flex-col gap-2 ">
                        <span className="text-[#FFFFFF] font-semibold text-base opacity-70">
                          Password
                        </span>
                        <input
                          className="bg-[#2B2B3F] outline-none border-[1px] border-solid border-red-600 rounded-lg min-w-[471px] w-full min-h-[48px] h-full text-[#F5F5FF] text-base font-normal px-4 py-3 "
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mt-5">
                        <span className="text-[#FF4747] font-normal text-base">
                          {errorMessage}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col gap-2 mb-5">
                      <span className="text-[#FFFFFF] font-semibold text-base opacity-70">
                        Tên đăng nhập
                      </span>
                      <input
                        className="bg-[#2B2B3F] outline-none rounded-lg min-w-[471px] w-full min-h-[48px] h-full text-[#F5F5FF] text-base font-normal px-4 py-3 focus:outline-[#347AFF]"
                        type="text"
                        name="name"
                        onChange={(e) => setAccount(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <span className="text-[#FFFFFF] font-semibold text-base opacity-70">
                        Password
                      </span>
                      <input
                        className="bg-[#2B2B3F] outline-none rounded-lg min-w-[471px] w-full min-h-[48px] h-full text-[#F5F5FF] text-base font-normal px-4 py-3 focus:outline-[#347AFF]"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div onChange={handleChecked} className="mt-5">
                  <CheckBox
                    isChecked={isChecked}
                    titleCheckbox="Ghi nhớ đăng nhập"
                  />
                </div>
                <div className="bg-[#FF7506] rounded-lg mx-auto flex justify-center items-center w-[208px] mt-12">
                  <button
                    type="submit"
                    className="text-[#FFFFFF]  text-[18px] font-medium py-4 px-6">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[50px] mb-[60px]">
            <Link to="/resetpassword">
              <span className="text-[#FF7506] underline">Quên mật khẩu?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
