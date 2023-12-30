import React from 'react'
import Header from '../Components/Header'
import '../styles/works.scss'
import ProjectAll from '../Components/ProjectAll';
import SocialVertical from '../Components/SocialVertical';
import Footer from '../Components/Footer';
const Works = () => {
  return (
    <div className='container'>
      <div className="col1">
         <SocialVertical></SocialVertical>
      </div>
      <div className="col2">
         <Header></Header>
         <div className="page_title">
         <h1><span>/</span>projects</h1>
         <p>List of All Projects</p>
         </div>
         <div className='complete_app'>
            <ProjectAll></ProjectAll>
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

export default Works;