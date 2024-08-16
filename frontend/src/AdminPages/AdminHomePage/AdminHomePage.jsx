import React, { useState } from 'react';
import './style.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const user = {
  name: "Admin",
  photoUrl: "https://example.com/path/to/photo.jpg",
};

function AdminHomePage({ children }) {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="adminHomePage">
      <Topbar toggleSidebar={toggleSidebar} user={user} />
      <div className="layout">
        <Sidebar sidebarActive={sidebarActive} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default AdminHomePage;
