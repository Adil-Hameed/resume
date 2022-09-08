import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Resume from "./pages/resume"
import Work from './pages/work';
import Blog from './pages/blog';
import Contact from './pages/contact';
import { Route, Routes } from "react-router-dom"
import Slider from './pages/slider';



function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Slider />
    </div>
  );
}

export default App;
