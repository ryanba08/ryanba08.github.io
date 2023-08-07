import React, { useState } from "react";

export default function Projects() {
  const [effect, setEffect] = useState(true);
  const glowingLine = "w-10/12 h-1 rounded-md mx-auto";
  const downArrow =
    "mx-auto w-5 h-5 border-t-[3px] border-r-[3px] border-solid botder-white rotate-[135deg] hover:border-purple-500 mt-2 ";
  return (
    <div className="grid text-2xl mt-40 text-center">
      <div
        className="hover:text-purple-500 hover:animate-bounce2"
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
        }}
      >
        Projects
      </div>
      <ul className="list-none mt-1">
        <li
          className={
            effect
              ? `${glowingLine} bg-slate-50 animate-pulse`
              : `${glowingLine} bg-slate-500 animate-none translate-y-44`
          }
        ></li>
      </ul>
      <div
        className={
          effect
            ? `${downArrow} animate-pulse`
            : `${downArrow} animate-none translate-y-44`
        }
        onClick={() => {
          effect ? setEffect(false) : setEffect(true);
        }}
      ></div>
      <div className={effect ? "hidden" : ""}>Under Construction!</div>
    </div>
  );
}
