import React from "react";
import { Link } from "react-router-dom";
// Remove this unused import:
// import { useAuth } from "../context/AuthContext";

function Navbar() {
  // REMOVE THESE LINES (lines 5-16):
  // const { logout } = useAuth();
  // const handleLogout = () => {
  //   if (window.confirm('Are you sure you want to logout?')) {
  //     logout();
  //   }
  // };
  // const handleDashboard = () => {
  //   window.location.href = process.env.DASHBOARD;
  // };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      {/* ... rest of the code stays the same ... */}
    </nav>
  );
}

export default Navbar;