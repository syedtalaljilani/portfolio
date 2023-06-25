import React from 'react'
import '../styles/ProjectCard.scss';
const ProjectCard = ({technology,img,livelink,cachedlink,title,desc}) => {
  return (
    <div>
        <div className="card">
            <img src={img} alt="" />
            <p>{technology}</p>
            <h1>{title}</h1> 
            <h3>{desc}</h3>
            <div className="btngroup">
            <div className="btn1">
            <a href={livelink}>Live {'<~>'}</a>  
            </div>
            <div className="btn2">
            <a href={cachedlink}>Cached {'>='}</a>  
                </div>
                </div>  
        </div>
    </div>
  )
}

export default ProjectCard;