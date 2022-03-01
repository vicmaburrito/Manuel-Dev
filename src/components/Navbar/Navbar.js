import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
    <nav className="navbar navbar-expand-lg">
      <ItemNav
        onClick={() => scrollTo('firstBlock')}
        item="Manuel Aldaraca"
      />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
