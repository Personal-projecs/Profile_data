import React from "react";
import logo from "./logo.png";

const Navbar = ({setsearchdata,setsearch}) => {
  return (
    <div className="flex h-20 border-2 items-center shadow justify-between">
      <div className="Item1 ml-28">
        <img src={logo} className="h12 w-12" />
      </div>
      <div className="itme2  border shadow-md h-10 rounded-md justify-center items-center flex w-56 mr-24">
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
