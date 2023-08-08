import React, { Component, useState } from "react";
const AboutMe = () => {
  const glowingLine = "w-10/12 h-1 rounded-md mx-auto mt-1";
  const downArrow =
    "mx-auto w-5 h-5 border-t-[3px] border-r-[3px] border-solid rotate-[135deg] hover:border-purple-500 mt-2";
  const [effect, setEffect] = useState(true);
  function grab() {
    return document.getElementById("project");
  }

  return (
    <div id="aboutMe" className="grid text-4xl text-center mt-20">
      <div
        className="mx-auto hover:text-purple-500 hover:animate-bounce2"
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
          effect
            ? (grab().style.display = "none")
            : (grab().style.display = "grid");
        }}
      >
        About Me
      </div>
      <div
        className={
          effect
            ? `${glowingLine} bg-slate-50 animate-pulse`
            : `${glowingLine} bg-slate-500 animate-none translate-y-[500px]`
        }
      ></div>
      <div
        className={
          effect
            ? `${downArrow} animate-pulse border-slate-50`
            : `${downArrow} animate-none translate-y-[500px] border-slate-500`
        }
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
          effect
            ? (grab().style.display = "none")
            : (grab().style.display = "grid");
        }}
      ></div>
      <div className={effect ? "hidden" : ""}>Ryan Cannady</div>
    </div>
  );
};

export default AboutMe;
