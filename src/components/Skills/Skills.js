import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ROR from '../../assets/icons/logoRor.svg';
import REACT from '../../assets/icons/logoReact.svg';
import POSTGRES from '../../assets/images/POSTGRES.png';
import JS from '../../assets/icons/logoJs.svg';

import './Skills.css';

function Skills({ id }) {
  return (
    <Container className="content-section bg-projects text-white text-center" id={id}>
      <div className="container px-4 px-lg-5">
        <div className="content-section-heading">
          <h1 className="text-warning mt-0 mb-0">knowledge</h1>
          <h2 className="mb-5 text-dark">Skills</h2>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3 logo-rails">
              <img src={ROR} alt="logoROR" width="70vh" className="mb-3 logo-rails-img" />
            </span>
            <h4 className="text-dark"><strong>Ruby on Rails</strong></h4>
            <p className="text-dark mb-0">
              Rails is a full-stack framework.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3 logo-react-pg">
              <img src={POSTGRES} alt="logoPOSTGRES" width="70vh" className="mb-2" />
            </span>
            <h4 className="text-dark"><strong>PostgreSQL</strong></h4>
            <p className="text-dark mb-0">
              Open source relational database management
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3 logo-react-pg">
              <img src={REACT} alt="logoREACT" width="110vh" className="mb-3 react-logo" />
            </span>
            <h4 className="text-dark"><strong>React</strong></h4>
            <p className="text-dark mb-0">
              Open-source JavaScript library for build user
              interfaces SPA.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3 logo-js">
              <img src={JS} alt="logoJS" width="70vh" className="mb-3" />
            </span>
            <h4 className="text-dark"><strong>JavaScript</strong></h4>
            <p className="text-dark mb-0">Using plain JavaScript without any additional libraries.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

Skills.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Skills;
