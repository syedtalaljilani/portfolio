import React from 'react'
import '../styles/ProjectLatest.scss'
import ProjectCard from './ProjectCard'
const ProjectLatest = () => {
  return (
    <>
     <div class="container_project">
        <div className='heading'>
        <h1><span>#</span>projects</h1>
        </div>
        <div className='hr'></div>
        <div className='viewproject'>
        <a href="#" class="view-all-projects">View all{'~~>'}</a>
        </div>
     </div>
     <div className="project_grid">
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'src/assets/ProtectX.png'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'src/assets/ProtectX.png'}/>
     <ProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} img={'src/assets/ChertNodes.jpg'}/>
        </div>
    </>
  )
}

export default ProjectLatest