import React, { useContext, useState } from "react";
import ManualImage from "../../assets/SigninAssets/Manual.png";
import { AuthModalConst } from "../../const/AuthModalConst";
import SignUpScreen from "../AuthScreens/SignUpScreen";
import SignInScreen from "../AuthScreens/SignInScreen";
import { AuthContext } from "../../context/authModalContext";
import ResetPasswordScreen from "../AuthScreens/ResetPasswordScreen";
import { useParams } from "react-router-dom";
import ManualMainScreen from "./ManualMainScreen";
const ManualScreens = () => {
  // const [authScreenHandler, setAuthScreenHandler] = useState("");
  const { curentAuthScreen, setCurentAuthScreen } = useContext(AuthContext);
  const { screenOption } = useParams();

  // if (screenOption !== "reset") {
  //   return (
  //     <div className="min-h-screen min-w-full flex items-center justify-center">
  //       <h1 className="text-red-700 text-2xl">404 Page not found</h1>
  //     </div>
  //   );
  // }

  return (
    <>
      {curentAuthScreen == AuthModalConst.SIGNIN && <SignInScreen />}
      {curentAuthScreen == AuthModalConst.SIGNUP && <SignUpScreen />}
      {curentAuthScreen == AuthModalConst.RESETPASS && <ResetPasswordScreen />}

      {screenOption == "reset" && <ResetPasswordScreen />}
      <ManualMainScreen />
    </>
  );
};

export default ManualScreens;
