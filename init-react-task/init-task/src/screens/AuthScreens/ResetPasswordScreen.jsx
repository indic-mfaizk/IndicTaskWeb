import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import CrossButton from "../AuthScreens/component/CrossButton";
const ResetPasswordScreen = () => {
  const [resetPassError, setResetPassError] = useState(false);
  const [isObsecurePass, setIsObsecurePass] = useState(false);

  return (
    <div className="min-w-full min-h-screen z-20 absolute backdrop-blur-md flex items-center justify-center ">
      <div className="sm:pb-9 w-full min-h-screen sm:min-h-fit sm:w-[450px]  bg-[#26272b] text-white flex flex-col items-center justify-start relative">
        {/* cross-button */}

        <CrossButton />
        {/* cross-button */}
        <h1 className="font-roboto_condensed my-4 mt-8 font-bold text-xl ">
          RESET PASSWORD
        </h1>

        <label className="flex flex-colitems-center justify-center">
          <div
            className="flex flex-col items-start justify-evenly
                w-[350px]
              "
          >
            <h5 className="font-roboto_condensed text-xs mb-1">New Password</h5>
            <div
              className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded relative`}
            >
              <AiFillLock size={15} className="w-8 h-7 mx-2" />
              <input
                type={!isObsecurePass ? "password" : "text"}
                className=" rounded-sm bg-[#1d1f23] text-xs w-[88%] h-10 pl-2 mx-1 !outline-none"
                placeholder="Enter Password"
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
        {resetPassError && (
          <h2 className="text-red-600 text-xs self-center mr-20 mt-1">
            Your password must be at least 8 characters long
          </h2>
        )}

        <button
          className="bg-[#eb7d2d] w-[350px] h-10 rounded my-4 text-sm font-roboto_condensed font-semibold"
          type="submit"
          onClick={() => {
            setResetPassError((e) => !e);
          }}
        >
          RESET PASSWORD
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
