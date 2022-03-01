/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

function ItemNav({ item }) {
  return (
    <li className="nav-item">
      <a className="nav-link">
        {item}
      </a>
    </li>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ItemNav;
