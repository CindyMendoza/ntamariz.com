import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./index.css";
import Aboutme from "./Aboutme.jsx";
import Artdirection from "./Artdirection.jsx";
import Photography from "./Photography.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Photography/>
    <Artdirection/>
    <Aboutme />
    <Footer />
  </React.StrictMode>
);
