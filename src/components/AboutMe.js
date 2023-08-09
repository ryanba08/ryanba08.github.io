import React, { useState } from "react";
const AboutMe = () => {
  const title = "mx-auto hover:text-purple-500";
  const glowingLine = "w-10/12 h-1 rounded-md mx-auto mt-1";
  const downArrow =
    "mx-auto w-5 h-5 border-t-[3px] border-r-[3px] border-solid rotate-[135deg] hover:border-purple-500 mt-2";
  const [effect, setEffect] = useState(true);
  function grab() {
    return document.getElementById("project");
  }

  return (
    <div id="aboutMe" className="grid text-4xl text-center mt-20">
      <btn
        className="mx-auto"
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
          effect
            ? (grab().style.display = "none")
            : (grab().style.display = "grid");
        }}
      >
        <div
          className={
            effect
              ? `${title} hover:animate-bounce2`
              : `${title} -translate-y-20 mt-6`
          }
        >
          About Me
        </div>
      </btn>
      <div
        className={
          effect
            ? `${glowingLine} bg-slate-50 animate-pulse`
            : `${glowingLine} bg-slate-500 translate-y-[700px] animate-none md:translate-y-[500px]`
        }
      ></div>
      <div
        className={
          effect
            ? `${downArrow} animate-pulse border-slate-50`
            : `${downArrow} animate-none translate-y-[700px] border-slate-500 md:translate-y-[500px]`
        }
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
          effect
            ? (grab().style.display = "none")
            : (grab().style.display = "grid");
        }}
      ></div>
      <div className={effect ? "hidden" : "block mr-5 ml-5 md:mr-52 md:ml-52"}>
        <span>
          <p className="text-2xl leading-loose text-slate-200">
            Hey there! I'm <b className="text-3xl">Ryan Cannady</b>, a data
            scientist/analyst who's all about turning numbers into insights.
            When I'm not diving into data, you'll find me enjoying ice cream or
            chasing victories in Rocket League. I believe in the power of data
            to shape smarter decisions. My goal is to make a real impact by
            harnessing data's potential. Let's connect and work towards a future
            fueled by data and a scoop of fun!
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
