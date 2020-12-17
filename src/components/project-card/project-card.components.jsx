import React from 'react';
import './project-card.styles.scss';

const ProjectCard = ({ link, name, imageUrl }) => (
  <div className="project-card-container">
    <h2 className="project-card-title">Projects</h2>
    <div className="project-card-item">
      <span className="project-name">{name}</span>
      <div
        className="project-card-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="project-card-footer">
        <div>
          <a href="" target="_blank" rel="noopener">
            <button className="projects-btn">Project</button>
          </a>
          <a href="" target="_blank" rel="noopener">
            <button className="sc-btn">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
