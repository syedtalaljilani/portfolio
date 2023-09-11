// src/components/Footer.js
import React from 'react';
import { FaTwitter, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <Link to="https://twitter.com/syedtalalj" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
        <Link to="https://github.com/syedtalaljilani" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <Link to="https://linkedin.com/in/syedtalaljilani" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
      </div>
      <h1 className="footer__name">Syed Talal Jilani</h1>
      <p className="footer__job-title">SaaS Developer and Penetration Tester</p>
      <p className="footer__credit">
        Made with <FaHeart /> using React.js, SCSS, and more.
      </p>
    </footer>
  );
};

export default Footer;
