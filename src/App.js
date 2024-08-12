import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Blog from './Components/Blog';
import Recent from './Components/Recent';
import Work from './Components/Work';
import Footer from './Components/Footer';
import Works from './Components/Works';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Recent />
              <Work />
              <Footer />
            </>
          } />
          <Route path="/header" element={<Header />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
