import React from 'react';
import '../styles/ProjectLatest.scss';
import ProjectCard from './ProjectCard';
import SmallProjectCard from './SmallProjectCard';
const ProjectAll = () => {
  return (
    <>
     <div className="container_project">
        <div className='heading'>
        <h1><span>#</span>complete-apps</h1>
        </div>
        <div className='hr'></div>
        
     </div>
     <div className="project_grid">
     <ProjectCard title={'WaterUI'} desc={'TailwindCSS Reusable Components Library'} technology={'React TailwindCSS CodeMirror'} img={'/assets/project01.png'} livelink={'https://waterui.netlify.app/'} cachedlink={'https://github.com/syedtalaljilani/WaterUI'}/>
     <ProjectCard title={'Fiyxer'} desc={'Digital Agency Website Template'} technology={'React TailwindCSS Swiper'} img={'/assets/project02.png'} livelink={'https://fiyxer.com'} cachedlink={'https://github.com/syedtalaljilani/Fiyxer'} />
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ChertNodes'} desc={'Minecraft servers hosting '} technology={'HTML SCSS Python Flask'} img={'/assets/ChertNodes.jpg'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
     <ProjectCard title={'ProtectX'} desc={'Discord anti-crash bot'} technology={'HTML SCSS Python Flask'} img={'/assets/ProtectX.png'}/>
        </div>

        <br />
        <div className="container_project">
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