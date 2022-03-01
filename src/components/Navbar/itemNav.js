/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

function ItemNav({ item }) {
  return (
    <a className="nav-link">
      {item}
    </a>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ItemNav;
