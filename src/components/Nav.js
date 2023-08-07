import React, { Component } from "react";

const Nav = () => {
  return (
    <div className="flex justify-between w-10/12 mx-auto mt-3">
      <div></div>
      <ul className="flex">
        <li className="mr-8 hover:text-purple-500 hover:animate-bounce2">
          <a>Projects</a>
        </li>
        <li className="mr-8 hover:text-purple-500 hover:animate-bounce2">
          <a>Skills</a>
        </li>
        <li className="hover:text-purple-500 hover:animate-bounce2">
          <a>About Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
