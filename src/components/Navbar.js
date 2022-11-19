import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const path = useLocation();
  return (
    <div className="mid">
      {/* <div className="left">
        <img
          width={80}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/640px-ZDF_logo%21_Logo_2021.svg.png"
          alt="logo"
        />
      </div> */}
      <ul className="navbar">
        <li className={path.pathname === "/" ? "item active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={path.pathname === "/hour" ? "item active" : ""}>
          <Link to="/hour">Hourly</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
