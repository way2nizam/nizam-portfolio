import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Blogs from './components/blogs';
import Projects from './components/projects';
import Mark15 from './components/mark15';
import Bonus from './components/bonus';
import Tminus5 from './components/tminus5';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/mark15' element={<Mark15 />} />
        <Route path='/bonus-work' element={<Bonus />} />
        <Route path='/tminus5' element={<Tminus5 />} />
      </Routes>
    </Router>
  );
};

export default App;
