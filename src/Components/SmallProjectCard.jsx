import React from 'react';
import '../styles/ProjectCard.scss';
import {Link} from 'react-router-dom';
const SmallProjectCard = ({ technology, githublink, figmalink, title, desc }) => {
  return (
    <div>
      <div className="card">
        <p>{technology}</p>
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <div className="btngroup">
          {githublink ? (
            <div className="btn1">
              <Link to={githublink}>Github{'<~>'}</Link>
            </div>
          ) : null}
          <div className="btn2">
          <Link to={figmalink}>Figma{'>='}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;
