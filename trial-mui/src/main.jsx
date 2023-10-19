import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["poppins"].join(","),
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <App />
  </>
);
