import React from 'react';
import './navbar.css';
// TODO: Create Item navbar component as button and export it
function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <ItemNab />
      <div className="menu-items">
        <ItemNab
          onClick={() => scrollTo('contact')}
          className="links text-decoration-none"
        />
        <span className="links text-decoration-none">Projects</span>
        <span className="links text-decoration-none">Contact</span>
        <ItemNab />
        <ItemNab />
      </div>
    </nav>
  );
}
export default Navbar;
