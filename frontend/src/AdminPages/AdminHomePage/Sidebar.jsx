import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
      <nav className="sidebar">
        <div>
          <ul>
            <li><Link to="/admin-dashboard">Dashboard</Link></li>
            <li><Link to="/admin-djs">DJs</Link></li>
            <li><Link to="/admin-events">Events</Link></li>
            <li><Link to="/admin-models">Models</Link></li>
            <li><Link to="/admin-portfolio">Portfolio</Link></li>
            <li><Link to="/admin-settings">Settings</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  
export default Sidebar