import React from 'react';
import ROR from '../../assets/icons/ROR.png';
import REACT from '../../assets/icons/REACT.png';
import POSTGRES from '../../assets/icons/POSTGRES.png';
import JS from '../../assets/icons/JS.png';

import './style.css';

function Projects() {
  return (
    <section className="content-section bg-projects text-white text-center" id="services">
      <div className="container px-4 px-lg-5">
        <div className="content-section-heading">
          <h3 className="text-secondary text-warning mt-0 mb-0">Stack</h3>
          <h2 className="mb-5">knowledge</h2>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img src={ROR} alt="logoROR" width="70vh" className="mb-3" />
            </span>
            <h4><strong>Ruby on Rails</strong></h4>
            <p className="text-faded mb-0">
              Rails is a full-stack framework.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img src={REACT} alt="logoREACT" width="70vh" className="mb-3" />
            </span>
            <h4><strong>React</strong></h4>
            <p className="text-faded mb-0">
              Open-source JavaScript library that is used for building user
              interfaces specifically for SPA.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img src={POSTGRES} alt="logoPOSTGRES" width="70vh" className="mb-2" />
            </span>
            <h4><strong>PostgreSQL</strong></h4>
            <p className="text-faded mb-0">
              Open source relational database management
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img src={JS} alt="logoJS" width="70vh" className="mb-3" />
            </span>
            <h4><strong>JavaScript</strong></h4>
            <p className="text-faded mb-0">Using plain JavaScript without any additional libraries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
