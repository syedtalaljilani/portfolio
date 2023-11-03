// Header.js

import React, {useEffect, useState} from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
    useEffect(() => {
      window.scroll(0,0);
    }, []);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };


  return (
    <nav>
      <h1>
         <img src='/assets/logo.gif' width={90} height={70} alt={'logo'}></img>
      </h1>
      <div className="menu-icon" onClick={handleMenuToggle}>
        {showMenu ? (<IoClose size={50} /> ): <div className="mobile_menu">
          <div className="heading">
          <img src='/assets/logo.gif' width={90} height={70} alt={'logo'} ></img>
          </div>
          <div className='icon'>
          <IoMenu size={50}/>
          </div>
          </div>}
      </div>
      <div className={`menu ${showMenu ? "active" : ""}`}>
        <NavLink className={'nav:active'} to="/"  onClick={handleMenuToggle}>
          <span>#</span>Home
        </NavLink>
        <NavLink to="/works" onClick={handleMenuToggle}>
          <span>#</span>Works
        </NavLink>
        <NavLink to="/about" onClick={handleMenuToggle}>
          <span>#</span>About Me
        </NavLink>
        <NavLink to="/contact" onClick={handleMenuToggle}>
          <span>#</span>Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
