import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Charts from "./components/Charts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <html>
    <Projects />
    <AboutMe />
    <Charts />
  </html>
);
