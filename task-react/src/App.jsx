import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import OtpScreen from "./screens/OtpScreen";
import HomeScreen from "./screens/HomeScreen";
import { Toaster } from "react-hot-toast";
import ResendOtpScreen from "./screens/ResendOtpScreen";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<SignUpScreen />} />
        <Route path="/signin" element={<SignUpScreen />} />
        <Route path="/otp" element={<SignUpScreen />} />
        <Route path="/resentOtp" element={<SignUpScreen />} />
        <Route path="/home" element={<SignUpScreen />} />
        <Route path="/forget" element={<SignUpScreen />} />
        {/* <Route path="/signin" element={<SignInScreen />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/resentOtp" element={<ResendOtpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/forget" element={<ForgetPasswordScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
