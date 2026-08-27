import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Donate from './containers/Donate';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
