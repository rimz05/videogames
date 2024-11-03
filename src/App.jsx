import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './finalpage/HomePage';
import ContactPage from './finalpage/ContactPage';
import AboutPage from './finalpage/AboutPage';
import GamePage from './finalpage/GamePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
