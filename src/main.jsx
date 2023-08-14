import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./index.css";
import Aboutme from "./Aboutme.jsx";
import Artdirection from "./Artdirection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Artdirection/>
    <Aboutme />
    <Footer />
  </React.StrictMode>
);
