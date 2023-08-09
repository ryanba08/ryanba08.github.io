import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Background from "./components/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <html className=" selection:text-purple-500">
    <Background />
    <Nav />
    <AboutMe />
  </html>
);
