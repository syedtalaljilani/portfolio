import React from 'react'
import '../styles/ProjectCard.scss';
import { Link } from 'react-router-dom';
const ProjectCard = ({technology,img,livelink,cachedlink,title,desc}) => {
  return (
    <div>
        <div className="card">
            <img src={img} alt=""/>
            <p>{technology}</p>
            <h1>{title}</h1> 
            <h3>{desc}</h3>
            <div className="btngroup">
            <div className="btn1">
              <Link to={livelink}>Live {'<~>'}</Link> 
            </div>
            <div className="btn2">
              <Link to={cachedlink}>Cached {'>='}</Link>
                </div>
                </div>  
        </div>
    </div>
  )
}

export default ProjectCard;