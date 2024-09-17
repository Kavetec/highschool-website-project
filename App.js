import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
};

export default App;
