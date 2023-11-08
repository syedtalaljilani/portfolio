import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/ProjectLatest.scss'
import ProjectCard from './ProjectCard'
const ProjectLatest = () => {
  return (
    <>
     <div className="container_project">
        <div className='heading'>
        <h1><span>#</span>projects</h1>
        </div>
        <div className='hr'></div>
        <div className='viewproject'>
        <Link to="/works" className="view-all-projects">
  View all{'~~>'}
</Link>
        </div>
     </div>
     <div className="project_grid">
     <ProjectCard title={'WaterUI'} desc={'TailwindCSS Reusable Components Library'} technology={'React TailwindCSS CodeMirror'} img={'/assets/project01.png'} livelink={'https://waterui.netlify.app/'} cachedlink={'https://github.com/syedtalaljilani/WaterUI'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} img={'/assets/ChertNodes.jpg'}/>
        </div>
    </>
  )
}

export default ProjectLatest