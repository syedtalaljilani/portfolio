import React from 'react'
import Header from '../Components/Header'
import '../styles/works.scss'
import ProjectAll from '../Components/ProjectAll';
const Works = () => {
  return (
     <div className='project-all'>
      <Header></Header>
      <div className='project-card'>
      <div className="page_title">
         <h1><span>/</span>projects</h1>
         <p>List of my projects</p>
        </div>
       <ProjectAll></ProjectAll>
      </div>
     </div>
     
  )
}

export default Works;