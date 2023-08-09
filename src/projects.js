import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Background from "./components/Background";

const project = ReactDOM.createRoot(document.getElementById("projects"));
project.render(
  <html className=" selection:text-purple-500">
    <Background />
    <Nav />
  </html>
);
