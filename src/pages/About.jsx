import React from 'react'
import '../styles/aboutme.scss'
import Header from '../Components/Header';
import LargeAboutMe from '../Components/LargeAboutMe';
import SocialVertical from '../Components/SocialVertical';
import Footer from '../Components/Footer';
const About = () => {
  return (
    <div className='container'>
      <div className="col1">
         <SocialVertical/>
      </div>
      <div className="col2">
         <Header />
         <div className="page_title">
         <h1><span>/</span>about-me</h1>
         <p>Who am I?</p>
         </div>
         <div className='large_aboutme'>
            <LargeAboutMe/>
         </div>
         <div className="footer">
          <Footer/>
        </div>
      </div>
      <div className="col3">
      </div>
    </div>
  )
}

export default About;