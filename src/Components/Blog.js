import React from 'react';
import { Link } from 'react-router-dom';
import Insta from '../Assets/insta.svg'
import Facebook from '../Assets/facebook.svg'
import Twitter from '../Assets/twiter.svg'
import In from '../Assets/in.svg'
const Blog = () => {
  
  const icons = [
    {
      image: Insta
    },
    {
      image: Facebook
    },
    {
      image: Twitter
    },
    {
      image: In
    }
  ]

  return (
    <div className="Blog-section-container">
  <header className="header-container-section">
      <nav className="nav works">
          <ul className="nav__list">
            <li className="nav__list_item"><Link className="nav__link" to="/">Home</Link></li>
            <li className="nav__list_item"><Link className="nav__link" to="/works">Works</Link></li>
            <li className="nav__list_item"><Link className="nav__link" to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
      <div className="works-exaples-container">
      <h1 className="primary a-1">Blog</h1>
      <div className="work-box-container blog second  ">
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">UI Interactions of the week</h1>
          <div className="work-box-dates-container works-dates">
          <h5 class="primary a-3">12 Feb 2019 |</h5> Express, Handlebars
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container blog second ">
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">UI Interactions of the week</h1>
          <div className="work-box-dates-container works-dates">
          <h5 class="primary a-3">12 Feb 2019 |</h5> Express, Handlebars
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container blog second ">
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">UI Interactions of the week</h1>
          <div className="work-box-dates-container works-dates">
          <h5 class="primary a-3">12 Feb 2019 |</h5> Express, Handlebars
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container blog second ">
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2 works-dates">UI Interactions of the week</h1>
          <div className="work-box-dates-container">
          <h5 class="primary a-3">12 Feb 2019 |</h5> Express, Handlebars
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      </div>
      <div className="footer-container">
      <div className="icons-container">
        {
                        icons.map((data) => (
                            <img className="icons-image" src={data.image} alt=""></img>
                    ))}
      </div>
      <h5 className="footer-container-text primary a-6">Copyright ©2020 All rights reserved </h5>
      </div>
    </div>
  );
}

export default Blog;
// в посиланні http://localhost:3000/portfolio-landing видаліть /portfolio-landing