import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = ({toggleModal}) => {
  return (
    <nav>
      <h1>Syed.J</h1>
      <main>
        <Link to="/">
          <span>#</span>Home
        </Link>
        <Link to={"/#works"}>
          <span>#</span>works
        </Link>
        <Link to={"/#about"}>
          <span>#</span>about-me
        </Link>
        <Link to={"/#contact"}>
          <span>#</span>contacts
        </Link>
      </main>
    </nav>
  );
};

export default Header;
