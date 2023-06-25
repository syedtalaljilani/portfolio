import React from 'react'
import '../styles/HeroSection.scss'
const HeroSection = () => {
  return (
    <div className='grid'>
      <div className="col1">
        <h1>Syed Talal Jilani is a <span>SaaS Developer (WEB + APP)</span> and <span>Security Consultant</span></h1>
        <p>He crafts responsive websites and apps and exploit!! where technologies meet creativity</p>
        <a href="">Contact me !!</a>
      </div>
      <div className="col2">
        <img src="/src/assets/boy.png" width={400}/>
        <div className="current_project">
            <p><span><img src="src/assets/boxpurple.png"/></span> Currently working on <a href=''>ProjectX</a></p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection