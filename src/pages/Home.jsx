import React from 'react'
import '../styles/home.scss';
import HeroSection from '../Components/HeroSection';
import SocialVertical from '../Components/SocialVertical';
import QouteBox from '../Components/QouteBox';
import ProjectLatest from '../Components/ProjectLatest';
import Header from '../Components/Header';
import SkillBoard from '../Components/SkillBoard';
import SmallAboutme from '../Components/SmallAboutme';
import SmallContactme from '../Components/SmallContactme';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div className='container'>
      <div className="col1">
        <SocialVertical/>
      </div>
      <div className="col2">
        <Header/>
        <div id="home">
          <HeroSection/>
        </div>
        <div className="qoute">
          <QouteBox/>
        </div>
        <div id='works'>
          <ProjectLatest/>
        </div>
        <div id="techstack">
          <SkillBoard/>
        </div>
        <div id="aboutme">
          <SmallAboutme/>
        </div>
        <div id="contactme">
          <SmallContactme/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
      <div className="col3">
      </div>
    </div>
  );
}

export default Home;