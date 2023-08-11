import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const textStyle = "mr-4 md:mr-8 hover:text-purple-500 hover:animate-bounce2";
  const navigate = useNavigate();
  const [effect, setEffect] = useState(false);
  return (
    <div className="z10 flex justify-between w-full mt-3 md:w-11/12 text-slate-50">
      <div></div>
      <ul className="flex list-none text-md md:text-lg 2xl:text-xl">
        <li className={textStyle}>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </li>
        <li
          className={textStyle}
          onClick={() => (effect ? setEffect(false) : setEffect(true))}
        >
          Contact
        </li>
        <li
          className={
            effect
              ? "z-10 w-60 h-40 bg-slate-400 mt-10 -ml-28 md:-ml-8 absolute rounded flex align-middle flex-col text-black"
              : "hidden"
          }
        >
          <span className="mx-auto mt-4 ml-4 leading-10">
            <a
              className="hover:text-purple-500"
              href="https://github.com/ryanba08"
              target="_blank"
            >
              Github
            </a>
            <br />
            <a
              className="hover:text-purple-500"
              href="https://www.linkedin.com/in/ryan-cannady-387518226/"
              target="_blank"
            >
              LinkedIn
            </a>
            <br />
            ryanba08@icloud.com
          </span>
        </li>
      </ul>
    </div>
  );
}
