import React from 'react';
import '../styles/ProjectCard.scss';

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
              <a href={githublink}>Github{'<~>'}</a>
            </div>
          ) : null}
          <div className="btn2">
            <a href={figmalink}>Figma{'>='}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;
