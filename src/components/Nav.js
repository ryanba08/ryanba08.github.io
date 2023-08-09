import React from "react";

export default function Nav() {
  const textStyle = "mr-4 md:mr-8 hover:text-purple-500 hover:animate-bounce2";
  return (
    <div className="z10 flex justify-between w-full mt-3 md:w-11/12 text-slate-50">
      <div></div>
      <ul className="flex list-none text-md md:text-lg 2xl:text-xl">
        <li className={textStyle}>
          <a href="/projects">Projects</a>
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
