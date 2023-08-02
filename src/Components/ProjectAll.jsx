import React from 'react';
import '../styles/ProjectLatest.scss';
import ProjectCard from './ProjectCard';
import SmallProjectCard from './SmallProjectCard';
const ProjectAll = () => {
  return (
    <>
     <div class="container_project">
        <div className='heading'>
        <h1><span>#</span>complete-apps</h1>
        </div>
        <div className='hr'></div>
        
     </div>
     <div className="project_grid">
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} img={'/assets/ChertNodes.jpg'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} img={'/assets/ChertNodes.jpg'}/>
        </div>

        <br />
        <div class="container_project">
        <div className='heading'>
        <h1><span>#</span>small-projects</h1>
        </div>
        <div className='hr'></div>
        
     </div>
     <div className="project_grid">
     <SmallProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} />
     <SmallProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} />
     <SmallProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} />
     <SmallProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} />
     <SmallProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} />
     <SmallProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'}/>
        </div>
    </>
  )
}

export default ProjectAll