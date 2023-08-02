import React from 'react'
import '../styles/HeroSection.scss'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='grid_hero'>
      <div className="col1">
        <h1>Syed Talal Jilani is a <span><Typewriter onInit={(typewriter)=>{typewriter.
        typeString("SaaS Developer").pauseFor(2000).deleteAll().typeString('Penetration Tester').pauseFor(2000).deleteAll().start()}} options={{
          loop:true,
        }}/></span>
        </h1>
        <p>He crafts responsive website,apps and exploit!! where technologies meet creativity</p>
         <Link to='/contact'>Contact me !!</Link>
      </div>
      <div className="col2">
        <img src="/assets/boy.png" width={400} className='img'/>
        <div className="current_project">
             <div>
             </div>
            <p>Currently working on <Link to='#'>ProjectX</Link></p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection