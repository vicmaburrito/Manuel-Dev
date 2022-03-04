import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstBlock from '../FirstBlock/FirstBlock';
import Skills from '../Skills/Skills';
import Projects from '../PersonalProjects/Projects';

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <FirstBlock id="#firstBlock" />
        <Route path="#skills" element={<Skills />} />
        <Skills id="#skills" />
        <Projects id="#projects" />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
