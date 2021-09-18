import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className=".navbar-container container">
        <MdFingerprint className="navbar-icon" />
        <Link to="/" className="navbar-logo">
          Patrick's House (er... Apartment) of Plants
        </Link>
        <br />
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Meet My Plants
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Care Tips/Advice
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
