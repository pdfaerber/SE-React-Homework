import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiPlantLine } from "react-icons/ri";
// import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: 'forestgreen' }}>
      <div className="navbar">
        <div className=".navbar-container container">
          <RiPlantLine className="navbar-icon" />
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Patrick's House of Plants
          </Link>
          
          <br />
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/meetmylants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Meet My Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/caretips"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Care Tips/Advice
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/donate"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link" >
                  <Button buttonStyle="btn--outline" buttonSize="btn-mobile">
                    Sign Up
                  </Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn-mobile">
                    Sign Up
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
