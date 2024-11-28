import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
    //   className={`absolute xl:fixed w-60 h-[80vh] bg-blue-900 text-white flex flex-col m-10 rounded-2xl shadow-lg transform ${
    //     isSidebarOpen ? "translate-x-0" : "-translate-x-72"
    //   } transition-transform duration-300 ease-in-out
    // }`}
    className="xl:absolute w-64 h-[80vh] bg-blue-900 text-white flex flex-col m-10 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold p-4 border-b border-blue-800">
        <Link to="/">Shaban Ali</Link>
      </h2>

      <nav className="flex-grow p-4 space-y-5">
      <Link to="/" className="block p-2 rounded hover:bg-blue-700">
          Dashboard
        </Link>
        <Link to="/profile" className="block p-2 rounded hover:bg-blue-700">
          Profile
        </Link>
        <Link to="/tables" className="block p-2 rounded hover:bg-blue-700">
          Tables
        </Link>
        <Link to="billing" className="block p-2 rounded hover:bg-blue-700">
          Billing
        </Link>
        <Link to="sign" className="block p-2 rounded hover:bg-blue-700">
          Sign In
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
