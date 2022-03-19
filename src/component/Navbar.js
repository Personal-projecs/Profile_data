import React from "react";
import logo from "./logo.png";

const Navbar = ({setsearchdata,setsearch}) => {
  return (
    <div className="flex h-20 w-screen border-2 items-center shadow md:justify-between">
      <div className="Item1 ml-12 lg:ml-28">
        <img src={logo} className="md:h-12 md:w-12 h-8 w-8" />
      </div>
      <div className="itme2  border shadow-md h-10 rounded-md justify-center items-center flex md:w-56 ml-16 lg:mr-24">
        <input
          type="text"
          className="border-none "
          placeholder="Search user...."
          onChange={event => { setsearchdata(event.target.value); setsearch(true) }}
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
