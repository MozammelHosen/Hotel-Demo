import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const menu = <>
        <li><Link to="/">Room-Booking</Link></li>
        <li><Link to="/Present-Booking">Present-Booking</Link></li>
        <li><Link to="/Booking-List">Booking-List</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
    </>
  return (
    <div className="navbar bg-purple-500 text-white font-serif text-xl">
      <div className="navbar-start text-white">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-purple-500"
          >
            {
                menu
            }
          </ul>
        </div>
        <Link id="btn1" className="btn btn-ghost normal-case text-blue-500 text-xl">JaraSoft-H</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            menu
          }
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Get started</Link>
      </div>
    </div>
  );
};

export default Navbar;
