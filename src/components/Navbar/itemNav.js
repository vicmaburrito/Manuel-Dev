import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ItemNav({ item, idToGo }) {
  return (
    <li className="nav-item">
      <Link to={idToGo} className="nav-link">
        {item}
      </Link>
    </li>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
  idToGo: PropTypes.string.isRequired,
};

export default ItemNav;
