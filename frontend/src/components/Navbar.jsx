import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
       

   <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Photography</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/djs" className="nav-link">DJs</Link>
        </li>
        <li>
          <Link to="/events" className="nav-link">Events</Link>
        </li>
        <li>
          <Link to="/models" className="nav-link">Models</Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
