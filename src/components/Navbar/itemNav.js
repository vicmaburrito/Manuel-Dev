import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import './navbar.css';

// DONE: Import button here and fix redirect to section id;
function ItemNav({ item, onClick }) {
  return (
    <li className="nav-item">
      <Nav.Link onClick={onClick} className="mx-2">
        {item}
      </Nav.Link>
    </li>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default ItemNav;
