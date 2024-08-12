import React from 'react'
import Insta from '../Assets/insta.svg'
import Facebook from '../Assets/facebook.svg'
import Twitter from '../Assets/twiter.svg'
import In from '../Assets/in.svg'
const Footer = () => {
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
    <div className="footer-container">
      <div className="icons-container">
        {
                        icons.map((data) => (
                            <img className="icons-image" src={data.image} alt=""></img>
                    ))}
      </div>
      <h5 className="footer-container-text primary a-6">Copyright ©2020 All rights reserved </h5>
    </div>
  )
}

export default Footer
