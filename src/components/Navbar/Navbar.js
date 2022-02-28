import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <Link to="/" className="title-math text-black text-decoration-none">Manuel Aldaraca</Link>
      <div className="menu-items">
        <Link to="/" className="links text-decoration-none">About Me</Link>
        <Link to="/#aboutme" className="links text-decoration-none">Projects</Link>
        <Link to="/#projects" className="links text-decoration-none">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
