import React from 'react';
import FirstBlock from '../FirstBlock/FirstBlock';
import Skills from '../Skills/Skills';
import Projects from '../PersonalProjects/Projects';

function Home() {
  return (
    <>
      <FirstBlock id="firstBlock" />
      <Skills id="Skills" />
      <Projects id="Projects" />
    </>
  );
}

export default Home;
