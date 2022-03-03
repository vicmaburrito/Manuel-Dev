import React from 'react';
import './Projects.css';
import jsBasic from '../../assets/images/img1.jpeg';
import rubyLinter from '../../assets/images/img2.png';
import baosLife from '../../assets/images/img3.png';
import ticTacToe from '../../assets/images/img4.jpg';

function Projects() {
  return (
    <section className="content-section bg-portfolio" id="portfolio">
      <div className="container px-4 px-lg-5">
        <div className="content-section-heading text-center">
          <h3 className="text-warning mb-0">Projects</h3>
          <h2 className="mb-5 text-white"> My Projects</h2>
        </div>
        <div className="row gx-0">
          <div className="col-lg-6">
            <a className="portfolio-item" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Baos Life</div>
                  <p className="mb-0">
                    An application that helps to create personalized nutritional plans for each
                    individual needs.
                  </p>
                </div>
              </div>
              <img className="img-fluid" src={baosLife} alt="..." />
            </a>
          </div>
          <div className="col-lg-6 p-4">
            <a className="portfolio-item" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Getting Started with JavaScript</div>
                  <p className="mb-0">A website with examples of logic, recommendations, methods and Javascript functions using markdown</p>
                </div>
              </div>
              <img className="img-fluid" src={jsBasic} alt="..." />
            </a>
          </div>
          <div className="col-lg-6 p-3">
            <a className="portfolio-item" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Tic Tac Toe</div>
                  <p className="mb-0">Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.</p>
                </div>
              </div>
              <img className="img-fluid" src={ticTacToe} alt="..." />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#!">
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Ruby Linter</div>
                  <p className="mb-0">A custom linter for ruby files! is a Ruby code style checker, Apart from reporting problems in your code.</p>
                </div>
              </div>
              <img className="img-fluid" src={rubyLinter} alt="..." />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
