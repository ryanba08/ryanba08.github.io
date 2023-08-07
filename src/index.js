import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IceCream from "./components/IceCream";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Nav />
    <Projects />
  </div>
);
