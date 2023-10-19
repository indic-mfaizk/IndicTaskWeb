import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { AuthContext } from "../../context/authModalContext";
import { AuthModalConst } from "../../const/AuthModalConst";
import CrossButton from "../AuthScreens/component/CrossButton";
import { useFormik } from "formik";
import * as Yup from "yup";
const whichScreen = {
  SignIn: "SignIn",
  PassCode: "PassCode",
  ForgetPassword: "ForgetPassword",
};
const SignInScreen = () => {
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(whichScreen.SignIn);
  const [isObsecurePass, setIsObsecurePass] = useState(false);
  const { curentAuthScreen, setCurentAuthScreen } = useContext(AuthContext);
  const [passCodeError, setpassCodeError] = useState(false);
  const [forgetEmailError, setForgetEmailError] = useState(false);
  const [forgetEmailSuccess, setForgetEmailSuccess] = useState(false);
  const [isCodeRequestPage, setIsCodeRequestPage] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required(),

      password: Yup.string().required(),
    }),
    onSubmit: (val) => {
      console.log(val);
      setPage(whichScreen.PassCode);
      // setIsInitialPage(false);
    },
  });

  return (
    <>
      <div className="min-w-full min-h-screen z-20 fixed top-0 backdrop-blur-md flex items-center justify-center ">
        {(page === whichScreen.PassCode || page == whichScreen.SignIn) && (
          <div className="sm:pb-9 w-full min-h-screen sm:min-h-fit sm:w-[450px]  bg-[#26272b] text-white flex flex-col items-center justify-start relative">
            {/* cross-button */}
            <CrossButton />
            {/* cross-button */}
            <h1 className="font-roboto_condensed my-4 mt-8 font-bold ">
              LOGIN
            </h1>
            {page === whichScreen.SignIn && (
              <>
                <form
                  className="flex flex-col gap-2"
                  onSubmit={formik.handleSubmit}
                >
                  {/* input-start */}
                  <label className="flex flex-colitems-center justify-center">
                    <div
                      className="flex flex-col items-start justify-evenly
              w-[350px]
            "
                    >
                      <h5 className="font-roboto_condensed text-xs mb-1">
                        Email/Phone Number/Username
                      </h5>
                      <div
                        className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                          isError ? "border border-red-600" : ""
                        }`}
                      >
                        <MdEmail size={20} className="w-8 h-7 mx-2 p-0.5" />
                        <input
                          type="text"
                          className=" rounded-sm bg-[#1d1f23] text-xs w-[88%] h-10 pl-2 mx-1 !outline-none"
                          placeholder="Please enter email/phone number/username"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                    </div>
                  </label>
                  {formik.touched.email && formik.errors.email ? (
                    <h2 className="text-red-600 text-xs">
                      {formik.errors.email}{" "}
                    </h2>
                  ) : null}

                  {/* input-end */}

                  {/* input-start */}
                  <label className="flex flex-colitems-center justify-center">
                    <div
                      className="flex flex-col items-start justify-evenly
              w-[350px]  
            "
                    >
                      <h5 className="font-roboto_condensed text-xs mb-1">
                        Password
                      </h5>{" "}
                      <div
                        className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded relative ${
                          isError ? "border border-red-600" : ""
                        }`}
                      >
                        <AiFillLock size={20} className="w-8 h-7 mx-2 p-0.5" />
                        <input
                          type={!isObsecurePass ? "password" : "text"}
                          className=" rounded-sm bg-[#1d1f23] text-xs w-[88%] h-10 pl-2 mx-1"
                          placeholder="Please enter password"
                          name="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                        />
                        <button
                          type="button"
                          className="absolute right-4"
                          onClick={(e) => {
                            setIsObsecurePass((e) => !e);
                            console.log("hello");
                          }}
                        >
                          {isObsecurePass ? (
                            <AiFillEye size={18} />
                          ) : (
                            <AiFillEyeInvisible size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </label>
                  {formik.touched.password && formik.errors.password ? (
                    <h2 className="text-red-600 text-xs">
                      {formik.errors.password}{" "}
                    </h2>
                  ) : null}
                  {/* input-end */}
                  <button
                    type="button"
                    className="self-end text-sm"
                    onClick={() => setPage(whichScreen.ForgetPassword)}
                  >
                    Forget password?
                  </button>
                  <button
                    className="bg-[#eb7d2d] w-[350px] h-10 rounded my-4"
                    type="submit"
                  >
                    Continue
                  </button>
                </form>
              </>
            )}
            {page == whichScreen.PassCode && (
              // eula-start
              <>
                <form
                  className="flex justify-center items-center flex-col"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // setTAndC((d) => !d);
                  }}
                >
                  <label className="flex flex-colitems-center justify-center">
                    <div
                      className="flex flex-col items-start justify-evenly
                w-[350px]
              "
                    >
                      <h5 className="font-roboto_condensed text-xs mb-1">
                        Passcode
                      </h5>
                      <div
                        className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded `}
                      >
                        <AiFillLock size={18} className="w-8 h-7 mx-2" />
                        <input
                          type="text"
                          className=" rounded-sm bg-[#1d1f23] text-xs w-[88%] h-10 pl-2 mx-1 !outline-none"
                          placeholder="Please enter code"
                        />
                      </div>
                    </div>
                  </label>
                  {passCodeError && (
                    <h2 className="text-red-600 text-xs self-start">
                      Code must be exactly 6 characters
                    </h2>
                  )}
                  <button
                    className="bg-[#eb7d2d] w-[100%] h-10 rounded my-4"
                    type="submit"
                    onClick={() => setpassCodeError((r) => !r)}
                  >
                    LOGIN
                  </button>
                  <h3 className="text-xs my-3">
                    To request a new code, please login again
                  </h3>
                </form>
              </>
              // eula-end
            )}

            {(page == whichScreen.PassCode || page === whichScreen.SignIn) && (
              <h3 className="text-xs my-3">
                Don't have an account?{" "}
                <span
                  className="text-[#EB7D2D] cursor-pointer"
                  onClick={() => setCurentAuthScreen(AuthModalConst.SIGNUP)}
                >
                  {" "}
                  Register an account
                </span>
              </h3>
            )}
          </div>
        )}
        {page === whichScreen.ForgetPassword && (
          <div className="sm:pb-9 w-full min-h-screen sm:min-h-fit sm:w-[450px]  bg-[#26272b] text-white flex flex-col items-center justify-start relative">
            {/* cross-button */}
            <CrossButton />
            {/* cross-button */}
            <h1 className="font-roboto_condensed my-4 mt-8 font-bold text-xl ">
              Forget Password
            </h1>

            <label className="flex flex-colitems-center justify-center">
              <div
                className="flex flex-col items-start justify-evenly
                w-[350px]
              "
              >
                <h5 className="font-roboto_condensed text-xs mb-1">Email</h5>
                <div
                  className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded `}
                >
                  <MdEmail size={18} className="w-8 h-7 mx-2" />
                  <input
                    type="text"
                    className=" rounded-sm bg-[#1d1f23] text-xs w-[88%] h-10 pl-2 mx-1 !outline-none"
                    placeholder="Please enter email address"
                  />
                </div>
              </div>
            </label>
            {forgetEmailError && (
              <h2 className="text-red-600 text-xs mr-40">
                Please enter a valid email address
              </h2>
            )}

            <button
              className="bg-[#eb7d2d] w-[350px] h-10 rounded my-4 text-sm font-roboto_condensed font-semibold"
              type="submit"
              onClick={() => {
                setForgetEmailError((r) => !r);
                setForgetEmailSuccess((r) => !r);
              }}
            >
              RECOVER PASSWORD
            </button>
            {forgetEmailSuccess && (
              <h2 className="text-green-600 text-xs">
                We have sent an account recovery email to abhinav@gmail.com
              </h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SignInScreen;
