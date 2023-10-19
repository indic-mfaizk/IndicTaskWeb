import React, { useContext, useState } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeft, BsBriefcaseFill } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { AuthContext } from "../../context/authModalContext";
import { AuthModalConst } from "../../const/AuthModalConst";
import CrossButton from "../AuthScreens/component/CrossButton";
import { BiSolidUser } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpScreen = () => {
  const [isError, setIsError] = useState(false);
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [tAndC, setTAndC] = useState(false);
  const [isObsecurePass, setIsObsecurePass] = useState(false);
  const [isObsecureCnfPass, setIsObsecureCnfPass] = useState(false);
  const { curentAuthScreen, setCurentAuthScreen } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      profession: "",
      password: "",
      cnfPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required(),
      username: Yup.string()
        .min(4, "Your username must be at least 3 characters long")
        .required(),
      profession: Yup.string()
        .min(6, "Your Profession must be at least 6 characters long")
        .required(),
      password: Yup.string()
        .min(8, "Your Password must be at least 8 characters long")
        .required(),
      cnfPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          "Confirm password must match with the password"
        )
        .required("Confirm password is required"),
    }),
    onSubmit: (val) => {
      console.log(val);
      setIsInitialPage(false);
    },
  });

  return (
    <div className="min-w-full min-h-screen z-20  backdrop-blur-md flex items-center justify-center fixed top-0">
      <div className="w-full min-h-screen sm:min-h-fit sm:w-[450px]  bg-[#26272b] text-white flex flex-col items-center justify-start relative ">
        {/* cross-button */}
        <CrossButton />
        {/* cross-button */}
        <h1 className="font-roboto_condensed my-4 mt-8 font-bold ">
          CREATE AN ACCOUNT
        </h1>
        {isInitialPage ? (
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
                  <h5 className="font-roboto_condensed text-xs mb-1">Email</h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2 p-0.5" />
                    <input
                      type="email"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1 !outline-none"
                      placeholder="Please enter email address"
                      name="email"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </label>
              {formik.errors.email && formik.touched.email ? (
                <h2 className="text-red-600 text-xs">{formik.errors.email}</h2>
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
                    Username
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <BiSolidUser size={20} className="w-8 h-7 mx-2  p-0.5" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter username"
                      name="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                  </div>
                </div>
              </label>
              {formik.touched.username && formik.errors.username ? (
                <h2 className="text-red-600 text-xs">
                  {formik.errors.username}
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
                  <h5 className="font-roboto_condensed text-xs mb-1 ">
                    Profession
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <BsBriefcaseFill size={15} className="w-8 h-7 mx-2 p-1" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter your profession"
                      name="profession"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.profession}
                    />
                  </div>
                </div>
              </label>
              {formik.touched.profession && formik.errors.profession ? (
                <h2 className="text-red-600 text-xs">
                  {formik.errors.profession}
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
                    <AiFillLock size={20} className="w-8 h-7 mx-2  p-0.5" />
                    <input
                      type={!isObsecurePass ? "password" : "text"}
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
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
                  {formik.errors.password}
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
                    Confirm Password
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded relative ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <AiFillLock size={20} className="w-8 h-7 mx-2  p-0.5" />
                    <input
                      type={!isObsecureCnfPass ? "password" : "text"}
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter password"
                      name="cnfPassword"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cnfPassword}
                    />
                    <button
                      type="button"
                      className="absolute right-4"
                      onClick={(e) => {
                        setIsObsecureCnfPass((e) => !e);
                        console.log("hello");
                      }}
                    >
                      {isObsecureCnfPass ? (
                        <AiFillEye size={18} />
                      ) : (
                        <AiFillEyeInvisible size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </label>
              {formik.touched.cnfPassword && formik.errors.cnfPassword ? (
                <h2 className="text-red-600 text-xs">
                  {formik.errors.cnfPassword}
                </h2>
              ) : null}
              {/* input-end */}
              <button
                className="bg-[#eb7d2d] w-[350px] h-10 rounded my-4"
                type="submit"
              >
                Continue
              </button>
            </form>
          </>
        ) : (
          // eula-start
          <>
            <form
              className="flex justify-center items-center flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setTAndC((d) => !d);
              }}
            >
              <div className="flex flex-row items-center justify-center  w-[75%] relative mb-2">
                <button
                  className="absolute left-0"
                  onClick={() => setIsInitialPage(true)}
                >
                  <BsArrowLeft className="" />
                </button>
                <h4 className="text-xs ">
                  Read and accept the terms and conditions
                </h4>
              </div>
              <div
                className={`${
                  tAndC && "border border-red-600"
                } h-[280px] bg-[#1d1f23] w-[75%] overflow-x-scroll text-xs font-roboto_condensed p-4 font-extralight`}
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form of a document or a typeface without
                relying on meaningful content. Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document Lorem
                ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document
              </div>
              <div className="w-[75%] flex flex-col gap-2 mt-3">
                <label className="flex items-center justify-start gap-2 ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-[#eb7d2d] bg-[#26272b] form-checkbox focus:outline-none focus-visible:outline-none focus:ring-offset-0"
                  />
                  <h4 className="text-xs">I accept that I am 18+</h4>
                </label>
                <label className="flex items-center justify-start gap-2 ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-[#eb7d2d] bg-[#26272b] form-checkbox focus:outline-none focus-visible:outline-none focus:ring-offset-0"
                  />
                  <h4 className="text-xs">
                    I have read and agree to the terms and conditions.
                  </h4>
                </label>
                {tAndC && (
                  <h2 className="text-red-600 text-xs">
                    Please Read the terms and conditions in full and scroll to
                    the end to accept
                  </h2>
                )}
              </div>
              <button
                className="bg-[#eb7d2d] w-[75%] h-10 rounded my-4"
                type="submit"
              >
                PLAY NOW
              </button>
            </form>
          </>
          // eula-end
        )}
        <h3 className="text-xs my-3">
          Already have an account?{" "}
          <span
            className="text-[#EB7D2D] cursor-pointer"
            onClick={() => setCurentAuthScreen(AuthModalConst.SIGNIN)}
          >
            {" "}
            Log In
          </span>
        </h3>
        <div className="flex gap-4 my-4">
          <div
            className={`${
              !isInitialPage ? "bg-[#FFFFFF]" : "bg-[#EB7D2D]"
            } h-2 w-2 rounded-full`}
            onClick={() => setIsInitialPage(true)}
          ></div>
          <div
            className={`${
              isInitialPage ? "bg-[#FFFFFF]" : "bg-[#EB7D2D]"
            } h-2 w-2 rounded-full`}
            onClick={() => setIsInitialPage(false)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
