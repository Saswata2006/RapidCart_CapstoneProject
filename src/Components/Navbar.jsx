import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">RapidKart</h2>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
