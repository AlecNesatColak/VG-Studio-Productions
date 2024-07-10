import React from 'react'

function Topbar() {
    return (
      <header className="topbar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-info">
          <span>Admin</span>
          <img src="user-profile.jpg" alt="User Profile" />
        </div>
      </header>
    );
  }

export default Topbar