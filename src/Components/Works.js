import React from 'react'
import { Link } from 'react-router-dom';
import First from '../Assets/Work_1.png'
import Second from '../Assets/Work_2.png'
import Third from '../Assets/Work_3.png'
import Fourth from '../Assets/Work_4.png'
import Insta from '../Assets/insta.svg'
import Facebook from '../Assets/facebook.svg'
import Twitter from '../Assets/twiter.svg'
import In from '../Assets/in.svg'
const Work = () => {

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
    <div className="Exaples-section-container">
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
      <h1 className="primary a-1">Works</h1>
      <div className="work-box-container second ">
        <div className="work-box-image-container third">
          <img className="works-image" src={First} alt="" />
        </div>
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">Designing Dashboards</h1>
          <div className="work-box-dates-container">
          <a className="dates-circle">2020</a> Dashboard
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container second ">
        <div className="work-box-image-container third">
          <img className="works-image" src={Second} alt="" />
        </div>
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">Designing Dashboards</h1>
          <div className="work-box-dates-container ">
          <a className="dates-circle">2020</a> Dashboard
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container second ">
        <div className="work-box-image-container third">
          <img className="works-image" src={Third} alt="" />
        </div>
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">Designing Dashboards</h1>
          <div className="work-box-dates-container">
          <a className="dates-circle">2020</a> Dashboard
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="work-box-container second ">
        <div className="work-box-image-container third">
          <img className="works-image" src={Fourth} alt="" />
        </div>
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">Designing Dashboards</h1>
          <div className="work-box-dates-container">
          <a className="dates-circle">2020</a> Dashboard
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
  )
}

export default Work
