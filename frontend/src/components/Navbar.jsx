import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo"></div>
        <span className="navbar-title">LOGO</span>
      </div>
      <div className="navbar-right">
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-close" onClick={closeMenu}>X</div>
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/djs" className="nav-link" onClick={closeMenu}>DJs</Link>
          </li>
          <li>
            <Link to="/events" className="nav-link" onClick={closeMenu}>Events</Link>
          </li>
          <li>
            <Link to="/models" className="nav-link" onClick={closeMenu}>Models</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
