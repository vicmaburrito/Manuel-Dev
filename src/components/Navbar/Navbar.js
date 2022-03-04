import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
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
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <span className="navbar-brand" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <ItemNav
              onClick={() => scrollTo('skills')}
              idToGo="#skills"
              item="Skills"
            />
            <ItemNav
              onClick={() => scrollTo('projects')}
              idToGo="#projects"
              item="projects"
            />
            <ItemNav
              onClick={() => scrollTo('contact')}
              idToGo="#contact"
              item="Contact"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
