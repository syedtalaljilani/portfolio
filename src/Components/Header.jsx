// Header.js

import React, { useState } from "react";
import { GoHubot } from "react-icons/go";
import { IoClose, IoMenu } from "react-icons/io5"; // Import icons for cross and hamburger
import { Link } from "react-router-dom";
import "../styles/Header.scss"; // Import the CSS file

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav>
      <h1>
         <img src='/assets/logo.gif' width={90} height={70}></img>
      </h1>
      <div className="menu-icon" onClick={handleMenuToggle}>
        {showMenu ? <IoClose size={50} /> : <div className="mobile_menu">
          <div className="heading">
          <img src='/assets/logo.gif' width={90} height={70}></img>
          </div>
          <div className='icon'>
          <IoMenu size={50}/> 
          </div>
          </div>}
      </div>
      <div className={`menu ${showMenu ? "active" : ""}`}>
        <Link to="/" onClick={handleMenuToggle}>
          <span>#</span>Home
        </Link>
        <Link to="/works" onClick={handleMenuToggle}>
          <span>#</span>Works
        </Link>
        <Link to="/about" onClick={handleMenuToggle}>
          <span>#</span>About Me
        </Link>
        <Link to="/contact" onClick={handleMenuToggle}>
          <span>#</span>Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Header;
