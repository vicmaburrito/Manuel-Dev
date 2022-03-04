import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

// TODO: Import button here and fix redirect to section id;
function ItemNav({ item, onClick }) {
  return (
    <li className="nav-item">
      <Button onClick={onClick} className="nav-link">
        {item}
      </Button>
    </li>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ItemNav;
