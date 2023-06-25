import React from 'react'
import '../styles/home.css';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import SocialVertical from '../Components/SocialVertical';
import QouteBox from '../Components/QouteBox';
import ProjectLatest from '../Components/ProjectLatest';
const Home = () => {
  return (
    <div className='container'>
      <div className="col1">
        <SocialVertical/>
      </div>
      <div className="col2">
        <Header/>
        <div id="works">
          <HeroSection/>
        </div>
        <div className="qoute">
          <QouteBox/>
        </div>
        <div className='projects'>
          <ProjectLatest/>
        </div>
      </div>
      <div className="col3">
      </div>
    </div>
  );
}

export default Home;