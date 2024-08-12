import React from 'react';
import { Link } from 'react-router-dom';
import Fristphoto from '../Assets/Photo_1.png';

const Header = () => {
  return (
    <div className="header-container">
        <header className="header-container-section">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list_item"><Link className="nav__link" to="/">Home</Link></li>
              <li className="nav__list_item"><Link className="nav__link" to="/works">Works</Link></li>
              <li className="nav__list_item"><Link className="nav__link" to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <div className="header-main-section">
          <div className="main-section-first">
            <h1 className="primary a-1">Hi, I am John, Creative Technologist</h1>
            <h5 className="primary a-9 a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
            <button className="download-button a-3">Download Resume</button>
          </div>
          <div className="main-section-second">
            <img className="main-section-photo" src={Fristphoto} alt="" />
          </div>
        </div>
    </div>
  );
}

export default Header;
