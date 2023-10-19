import React, { useState } from "react";
import NavHandler from "./NavHandler";
import { AuthContext } from "./context/authModalContext";
import { AuthModalConst } from "./const/AuthModalConst";
const App = () => {
  const [curentAuthScreen, setCurentAuthScreen] = useState("");
  //Enable this in final version
  // const [curentAuthScreen, setCurentAuthScreen] = useState("");
  return (
    <>
      <AuthContext.Provider
        value={{
          curentAuthScreen,
          setCurentAuthScreen,
        }}
      >
        <NavHandler />
      </AuthContext.Provider>
    </>
  );
};

export default App;
