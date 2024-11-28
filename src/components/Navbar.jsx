import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-400 px-5 md:px-7 flex md:items-center justify-between py-7 flex-col md:flex-row">
      <h2 className="text-5xl font-semibold text-green-950 ">Dashboard</h2>
      <div className="flex items-center mx-2 justify-between space-x-3 mt-10 md:mt-0">
        <div className="flex bg-zinc-50 items-center rounded-lg px-2 gap-1 py-2 ml-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Type here..."
            className="w-40 px-2 py-1 rounded-lg outline-none text-sm font-medium"
          />
        </div>
        <div>
          <ul className="flex items-center space-x-4 md:space-x-0">
            <li className="flex items-center justify-between px-2 py-2 gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
              <span className="font-semibold hidden md:inline w-auto whitespace-nowrap">
                Sign In
              </span>
            </li>
            <li className="flex">
              <button onClick={toggleSidebar} className="p-4 xl:hidden">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </li>
            <li className="flex items-center py-2 px-2 ">
              <FontAwesomeIcon icon={faGear} className="cursor-pointer" />
            </li>
            <li className="flex items-center py-2 px-2">
              <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
