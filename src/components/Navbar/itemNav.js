import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: Import button here and fix redirect to section id;
function ItemNav({ item, idToGo }) {
  return (
    <li className="nav-item">
      <Button to={idToGo} className="nav-link">
        {item}
      </Button>
    </li>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
  idToGo: PropTypes.string.isRequired,
};

export default ItemNav;
