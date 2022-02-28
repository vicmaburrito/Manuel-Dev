import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route />
        <Route />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
