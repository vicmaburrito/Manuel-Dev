import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
// import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home id="firstBlock" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
