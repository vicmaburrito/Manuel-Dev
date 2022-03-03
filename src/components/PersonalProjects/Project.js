import React from 'react';
import PropTypes from 'prop-types';

function ItemProject({ project, desc, imgName }) {
  return (
    <>
      <a className="portfolio-item" href="#!">
        <div className="caption">
          <div className="caption-content">
            <div className="h2">
              { project }
            </div>
            <p className="mb-0">
              { desc }
            </p>
          </div>
        </div>
        <img className="img-fluid" src={imgName} alt="..." />
      </a>
    </>
  );
}

ItemProject.propTypes = {
  project: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};

export default ItemProject;
