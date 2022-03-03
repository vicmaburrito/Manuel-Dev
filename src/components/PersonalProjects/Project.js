import React from 'react';

function ItemProject({ project, desc, imgName }) {
  return (
    <div className="col-lg-6">
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
    </div>
  );
}
export default ItemProject;
