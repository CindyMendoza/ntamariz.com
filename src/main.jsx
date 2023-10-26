import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./assets/css/index.scss";
import Aboutme from "./Aboutme.jsx";
import Artdirection from "./Artdirection.jsx";
import Photography from "./Photography.jsx";
import Header from "./Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Photography />
    <Artdirection />
    <Aboutme />
    <Footer />
  </React.StrictMode>
);
