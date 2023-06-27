import React from 'react'
import '../styles/HeroSection.scss'
import Typewriter from 'typewriter-effect'
const HeroSection = () => {
  return (
    <div className='grid'>
      <div className="col1">
        <h1>Syed Talal Jilani is a <span><Typewriter onInit={(typewriter)=>{typewriter.
        typeString("SaaS Developer").pauseFor(2000).deleteAll().typeString('Penetration Tester').pauseFor(2000).deleteAll().start()}} options={{
          loop:true,
        }}/></span>
        </h1>
        <p>He crafts responsive website,apps and exploit!! where technologies meet creativity</p>
        <a href="">Contact me !!</a>
      </div>
      <div className="col2">
        <img src="/assets/boy.png" width={400}/>
        <div className="current_project">
            <p><span><img src="/assets/boxpurple.png"/></span> Currently working on <a href=''>ProjectX</a></p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection