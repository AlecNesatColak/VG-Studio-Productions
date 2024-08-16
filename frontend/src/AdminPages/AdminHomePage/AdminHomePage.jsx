import React from 'react';
import './style.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const user = {
  name: "Admin",
  photoUrl: "https://example.com/path/to/photo.jpg",
};

function AdminHomePage({ children }) {
  return (
    <div className="adminHomePage">
      
      <div className="layout">
        <div className="content">{children}</div>
      </div>
       <Sidebar />
       <Topbar />
    </div>
  );
}

export default AdminHomePage;
