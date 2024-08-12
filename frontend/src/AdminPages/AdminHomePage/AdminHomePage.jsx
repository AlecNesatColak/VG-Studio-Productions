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
      <Sidebar />
      <div className="main-content">
        <Topbar user={user} /> {/* Topbar'ı burada yerleştirerek en üste alın */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default AdminHomePage;
