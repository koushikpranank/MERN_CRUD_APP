import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">MERN CRUD App</Link>
      </div>
      <div className="nav-links">
        {user ? (
          <>
            <span>Welcome, {user.username}!</span>
            <Link to="/items">Items</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
