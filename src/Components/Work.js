import React from 'react'
import First from '../Assets/Work_1.png'
import Second from '../Assets/Work_2.png'
import Third from '../Assets/Work_3.png'
const Work = () => {
  return (
    <div className="works-container">
      <h3 className="works-container-name primary a-3">Featured works</h3>
      <div className="work-box-container">
        <div className="work-box-image-container">
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
      <div className="work-box-container">
      <div className="work-box-image-container">
          <img className="works-image" src={Second} alt="" />
        </div>
        <div className="work-box-text-container">
          <h1 className="work-box-name primary a-2">Designing Dashboards</h1>
          <div className="work-box-dates-container">
          <a className="dates-circle">2020</a> Dashboard
          </div>
          <div className="work-box-text primary a-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
        </div>
        <div className="work-box-container">
      <div className="work-box-image-container">
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
    </div>
    
  )
}

export default Work
