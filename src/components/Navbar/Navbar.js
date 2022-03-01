import React from 'react';
import ItemNav from './itemNav';
import './navbar.css';

// DONE: Create Item navbar component as button and export it
function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <ItemNav
        onClick={() => scrollTo('firstBlock')}
        item="Manuel Aldaraca"
      />
      <div className="menu-items">
        <ItemNav
          onClick={() => scrollTo('about')}
          item="About Me"
        />
        <ItemNav
          onClick={() => scrollTo('about')}
          item="Projects"
        />
        <ItemNav
          onClick={() => scrollTo('contact')}
          item="Contact"
        />
      </div>
    </nav>
  );
}
export default Navbar;
