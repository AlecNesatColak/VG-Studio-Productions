import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Utils/LoadingSpinner/LoadingSpinner'

function Topbar() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigateLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/admin-login'); 
    }, 1500);
  };

  return (
    <header className="topbar">
      <div className="search-box">
       
      </div>
      <div className="user-info">
      {loading && <LoadingSpinner />}
        <span>Admin</span>
        <a className='close-admin-page' href="#" onClick={handleNavigateLogout}>
          Log Out
        </a>
        <img
          src='https://static.vecteezy.com/system/resources/previews/013/042/571/large_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'
          alt="User Profile"
          className="user-photo"
        />
      </div>
    </header>
  );
}

export default Topbar;