import React from "react";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import "../../src/app.css";

function Home() {
  return (
    <html className=" selection:text-purple-500">
      <Background />
      <Nav />
      <AboutMe />
    </html>
  );
}

export default Home;
