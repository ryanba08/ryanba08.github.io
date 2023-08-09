import React from "react";

function Background() {
  {
    return (
      <div className="absolute mt-20 flex left-1/4">
        <div className="z-10 h-[400px] w-[400px] bg-gradient-to-r from-slate-700 rounded-full 2xl:w-[550px] 2xl:h-[550px]"></div>
        <div className="z-0 mt-36 h-[400px] w-[400px] bg-gradient-to-r from-slate-900 rounded-full relative -left-28 2xl:w-[550px] 2xl:h-[550px]"></div>
      </div>
    );
  }
}

export default Background;
