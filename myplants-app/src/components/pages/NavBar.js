import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
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
    <IconContext.Provider value={{ color: '#290001' }}>
      <div className="navbar">
        <div className=".navbar-container container">
          <SiCoffeescript className="navbar-icon" />
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Patrick's House of Java
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
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='/HotDrink'
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Coffee Drinks & Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/swag"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Coffee Swag - New
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/donate"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hot (Tea)pics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
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
