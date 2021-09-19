import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri'
// import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Button} from '../Button';
import './NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  } 
  window.addEventListener('resize',showButton);

  return (
    
    <div className='navbar'>
      <div className='.navbar-container container'>
        <RiPlantLine className='navbar-icon' />
        <Link to='/' className='navbar-logo'>
          Patrick's House of Plants
        </Link>
        <br />
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/meetmylants' className='nav-links'>
              Meet My Plants
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/caretips' className='nav-links'>
              Care Tips/Advice
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/donate' className='nav-links'>
              Donate
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links'>
              Contact
            </Link>
          </li>
          <li className='nav-btn'>
            {button ? (
            <Link to='/sign-up' className ='btn-link'>
              <Button buttonStyle='btn--outline'
                      buttonSize= 'btn-mobile'
              >Sign Up</Button>
            </Link>
            ):(
            <Link to='/sign-up' className ='btn-link'>
              <Button buttonStyle='btn--outline'
                      buttonSize= 'btn-mobile'
              >Sign Up</Button>
            </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
