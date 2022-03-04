import React from 'react';
import './Projects.css';
import ItemProject from './Project';
import JsBasic from '../../assets/images/img1.jpeg';
import rubyLinter from '../../assets/images/img2.png';
import BaosLife from '../../assets/images/img3.png';
import ticTacToe from '../../assets/images/img4.jpg';
import CultureScience from '../../assets/images/img5.png';
import VhmDashboard from '../../assets/images/img6.png';

function Projects(id) {
  return (
    <section className="content-section bg-portfolio" id={id}>
      <div className="container px-4 px-lg-5">
        <div className="content-section-heading text-center">
          <h3 className="text-warning mb-0">Projects</h3>
          <h2 className="mb-5 text-white"> My Projects</h2>
        </div>
        <div className="row gx-0">
          <div className="col-lg-6 pt-5">
            <ItemProject
              project="Getting Started with JavaScript"
              desc="A website with examples of logic, recommendations, methods and Javascript functions using markdown."
              imgName={JsBasic}
            />
          </div>
          <div className="col-lg-6 px-3 py-4">
            <ItemProject
              project="Tic Tac Toe"
              desc="An application that helps to create personalized nutritional plans for each individual needs."
              imgName={ticTacToe}
            />
          </div>
          <div className="col-lg-6 py-5 px-2">
            <ItemProject
              project="Culture and Science Blog"
              desc="Hello world Hello world Hello world Hello world"
              imgName={CultureScience}
            />
          </div>
          <div className="col-lg-6 px-2">
            <ItemProject
              project="Ruby Linter"
              desc="A custom linter for ruby files! is a Ruby code style checker, Apart from reporting problems in your code."
              imgName={rubyLinter}
            />
          </div>
          <div className="col-lg-6 px-3 pt-5">
            <ItemProject
              project="Baos Life"
              desc="An application that helps to create personalized nutritional plans for each individual needs."
              imgName={BaosLife}
              className="p-3"
            />
          </div>
          <div className="col-lg-6 p-3">
            <ItemProject
              project="VHM Dashboard"
              desc="Hello world Hello world Hello world Hello world"
              imgName={VhmDashboard}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
