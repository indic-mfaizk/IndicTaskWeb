import axios from "axios";
import { toast } from "react-hot-toast";
import { CountryData } from "./data/csd";
import { redirect } from "react-router-dom";
const baseUrl = "http://172.16.1.217:8521/api/v1";

//working tested

export const SignUpService = async (data, nav) => {
  const {
    fname,
    lname,
    mobileNumber,
    email,
    password,
    cnfPassword,
    dob,
    country,
  } = data;
  const countryCode = CountryData.filter((e) => e.name === country)[0]
    .phone_code;
  try {
    const res = await axios.post(baseUrl + "/user/userSignup", {
      firstName: fname,
      lastName: lname,
      countryCode: countryCode,
      mobileNumber: String(mobileNumber),
      email: email,
      password: password,
      confirmPassword: cnfPassword,
      dateOfBirth: dob,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      toast.success(res.data.responseMessage);
      nav("/otp", { email: email });
    }
  } catch (e) {
    toast.error(e.response.data.responseMessage);
  }
  nav("/otp", { state: { email: email } });
};

//  working

export const SignInService = async (data, nav) => {
  // mfaizk1413@gmail.com
  // 1111
  const { email, password } = data;
  try {
    const res = await axios.post(baseUrl + "/user/userLogin", {
      email,
      password,
    });
    if (res.status === 200 || res.status === 201) {
      toast.success(res.data.responseMessage);

      nav("/home");
    }
  } catch (e) {
    toast.error(e.response.data.responseMessage);
  }
};

// not working

export const VerifyOtpService = async (d, nav) => {
  // 951369
  // mohdfaizkhan@g.com
  const { email, otp } = d;
  try {
    const res = await axios.post(baseUrl + "/user/verifyOTP", {
      email,
      otp,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      toast.success(res.data.responseMessage);
      nav("/home");
    }
  } catch (e) {
    toast.error(e.response.data.responseMessage);
  }
};

//working tested

export const ResendOtpService = async (d, nav) => {
  const { email } = d;

  try {
    const res = await axios.post(baseUrl + "/user/resendOTP", {
      email,
    });
    console.log(res);

    if (res.status === 200 || res.status === 201) {
      toast.success(res.data.responseMessage);
      console.log(res);
      nav("/otp", { state: { email } });
    }
  } catch (e) {
    toast.error(e.response.data.responseMessage);
  }
};

export const ForgotPasswordService = async (d, nav) => {
  const { email } = d;

  try {
    const res = await axios.post(baseUrl + "/user/forgotPassword", {
      email,
    });
    if (res.status === 200 || res.status === 201) {
      toast.success(res.data.responseMessage);
      console.log(res);
      nav("/otp", { state: { email } });
    }
  } catch (e) {
    toast.error(e.response.data.responseMessage);
  }
};
