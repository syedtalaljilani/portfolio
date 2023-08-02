import React from 'react'
import '../styles/aboutme.scss'
import Header from '../Components/Header';
import LargeAboutMe from '../Components/LargeAboutMe';
const About = () => {
  return (
    <div className='about_page'>
     <Header></Header>
    <div className='about-content'>
    <div className="page_title">
         <h1><span>/</span>about-me</h1>
         <p>Who am i?</p>
        </div>
    </div>
    <LargeAboutMe/>
    </div>
  )
}

export default About;