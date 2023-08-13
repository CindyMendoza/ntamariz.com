import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./index.css";
import Aboutme from "./Aboutme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Aboutme />
    <Footer />
  </React.StrictMode>
);
