import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Frame1 from './pages/Frame1';
import Frame2 from './pages/Frame2';
import Frame3 from './pages/Frame3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frame1" element={<Frame1 />} />
        <Route path="/frame2" element={<Frame2 />} />
        <Route path="/frame3" element={<Frame3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;