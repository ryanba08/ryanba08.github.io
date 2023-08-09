import React from "react";

const AboutMe = () => {
  return (
    <div className="flex justify-between w-full mx-auto md:w-10/12 mt-28">
      <span className="z-10 flex flex-col ml-4 md:ml-0 text-3xl md:text-4xl font-bold gap-2 2xl:text-5xl">
        <p className="text-slate-50">Ryan</p>
        <p className="text-slate-200">Data</p>
        <p className="text-slate-400">Scientist</p>
        <p className="text-slate-500">Analyst</p>
        <p className="text-slate-600">Loc: "FL"</p>
      </span>
    </div>
  );
};

export default AboutMe;
