import React from 'react'

const Recent = () => {
  return (
    <div className="recent-container">
      <div className="recent-help-block"></div>
      <div className="recent-container-header">
        <h3 className="recent-name">Recent posts</h3>
        <h5 className="recent-view">View all</h5>
      </div>
      <div className="recent-container-main">
        <div className="recent-container-box">
            <h1 className="recent-box-name primary a-1">Making a design system from scratch</h1>
            <div className="recent-box-container">
            12 Feb 2020  | Design, Pattern
            </div>
            <h3 className="recent-box-text ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
        </div>
        <div className="recent-container-box">
            <h1 className="recent-box-name primary a-1">Creating pixel perfect icons in Figma</h1>
            <div className="recent-box-container">
            12 Feb 2020  | Figma, Icon Design
            </div>
            <h3 className="recent-box-text ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
        </div>
      </div>
    </div>
  )
}

export default Recent
