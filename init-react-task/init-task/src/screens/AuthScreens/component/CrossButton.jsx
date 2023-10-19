import React, { useContext } from "react";
import { AuthContext } from "../../../context/authModalContext";
import { RxCross2 } from "react-icons/rx";

const CrossButton = () => {
  const { curentAuthScreen, setCurentAuthScreen } = useContext(AuthContext);
  return (
    <button
      className="absolute right-3 top-3"
      onClick={() => setCurentAuthScreen("")}
    >
      <RxCross2 size={25} />
    </button>
  );
};

export default CrossButton;
