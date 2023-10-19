import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
// import ManualScreens from "./screens/ManualScreens/ManualScreens";
import ManualMainScreen from "./screens/ManualScreens/ManualMainScreen";
import ManualScreens from "./screens/ManualScreens/ManualScreens";

const NavHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/manual" element={<ManualScreens />} />
        {/* <Route path="/login" element={<SignUpScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default NavHandler;
