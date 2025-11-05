import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    setIsProfileDropdownOpen(false);
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.clear();
      logout();
      window.location.href = `${process.env.FRONTEND_URL}/login`;
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
        <div className="menus">
          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
                <p className={selectedMenu===6 ? activeMenuClass : menuClass}>Apps</p>
              </Link>
            </li>
          </ul>
          <hr />
          
          <div className="profile">
            <div className="avatar" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              {user ? user.substring(0, 2).toUpperCase() : 'U'}
            </div>
            <p className="username" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              {user || 'USER'}
            </p>
          </div>
        </div>
      </div>

      {isProfileDropdownOpen && (
        <>
          <div
            onClick={() => setIsProfileDropdownOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 998,
              backgroundColor: 'transparent'
            }}
          />
          
          <div style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '6px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            minWidth: '200px',
            zIndex: 999
          }}>
            <div style={{
              padding: '14px 16px',
              borderBottom: '1px solid #eee',
              backgroundColor: '#f8f9fa'
            }}>
              <div style={{ 
                fontSize: '0.9rem', 
                color: '#333',
                fontWeight: '600' 
              }}>
                {user}
              </div>
            </div>
            
            <div
              onClick={handleLogout}
              style={{
                padding: '14px 16px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#d9534f',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <span style={{ fontSize: '1.1rem' }}>🚪</span>
              <span>Logout</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;