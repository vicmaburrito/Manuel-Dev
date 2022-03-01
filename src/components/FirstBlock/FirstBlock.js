import React from 'react';
import './FirstBlock.css';
import background from '../../assets/images/FirstBlockbackground.png';

function FirstBlock() {
  return (
    <section className="masthead d-flex align-items-center" style={{ background: `url(${background})` }}>
      <div className="container px-4 px-lg-5 text-center">
        <h1 className="mb-1 display-1 tracking-in-expand text-white">Manuel Aldaraca</h1>
        <h3 className="mb-5 display-3 text-white"><em>Hello There!</em></h3>
      </div>
    </section>
  );
}

export default FirstBlock;
