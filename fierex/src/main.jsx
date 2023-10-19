import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import "./index.css";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/oxanium";
import LandingPage from "./screens/LandingPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    {/* <App /> */}
    <LandingPage />
  </>
);
