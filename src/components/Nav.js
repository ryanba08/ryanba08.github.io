import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const textStyle = "mr-4 md:mr-8 hover:text-purple-500 hover:animate-bounce2";
  const navigate = useNavigate();
  return (
    <div className="z10 flex justify-between w-full mt-3 md:w-11/12 text-slate-50">
      <div></div>
      <ul className="flex list-none text-md md:text-lg 2xl:text-xl">
        <li className={textStyle}>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </li>
        <li className={textStyle}>
          <a href="https://github.com/ryanba08" target="_blank">
            Github
          </a>
        </li>
        <li className={textStyle}>Contact</li>
      </ul>
    </div>
  );
}
