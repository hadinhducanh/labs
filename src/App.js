
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Film from './components/film';
import FilmDetail from './components/film/Filmdetail'; // Create this component
import Contact from './components/contact/Contact'; // Create this component
import Navigation from './components/navigation';
import New from './components/new/New';
import About from './components/about/About';

function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
      <Navigation />
      {/* <Film /> */}
      <Routes>
          <Route path="/" element={<Film />} />
          <Route path="/detail/:filmId" element={<FilmDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
