import React from 'react';
import PropTypes from 'prop-types';

function ItemNav({ item }) {
  return (
    <a className="links text-decoration-none" href="#id">
      {item}
    </a>
  );
}

ItemNav.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ItemNav;
