import React, { useState } from "react";
import otpLogo from "../assets/otp.svg";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ResendOtpService } from "../service";

const ResendOtpScreen = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const re = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const handleSubmit = () => {
    if (!email) {
      toast.error("Email is required");
    } else {
      if (re.test(email)) {
        ResendOtpService({ email: email }, nav);
      } else {
        toast.error("Enter correct email");
        setEmail("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row-reverse sm:flex-row-reverse flex-col">
        {/* left-start */}
        <div className="lg:min-w-[508px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          <div className="sm:flex hidden">
            <img
              src={otpLogo}
              alt="brand-logo"
              className="sm:flex hidden w-72"
            />
          </div>
          <div className="sm:hidden flex  flex-col justify-end self-end flex-1  p-5 text-white">
            <h1 className="font-poppins-bold text-2xl">Get Verified</h1>
            <h1 className="text-sm">Enter otp to continue</h1>
          </div>
        </div>
        {/* left-end */}
        <div
          className="bg-white min-h-[656px] lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow
        flex flex-col sm:pl-32 sm:pt-32
        pl-8 pt-6
        gap-5
        "
        >
          <h1 className="text-2xl text-purple-400">Enter verification code</h1>
          <h4 className="text-sm text-gray-500 w-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque
          </h4>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              className="border px-3 py-2 rounded"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <button
            className="bg-[#410068] text-white h-9 w-28 rounded shadow"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResendOtpScreen;
