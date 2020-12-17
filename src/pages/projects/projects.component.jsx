import React from 'react';
import './projects.styles.scss';
import ProjectCard from '../../components/project-card/project-card.components';

import TestIMG from '../../assets/images/project-bg-one.jpg';
const ProjectPage = (props) => (
  <div>
    <ProjectCard name="Typing Test" imageUrl={TestIMG} link="" />
  </div>
);

export default ProjectPage;
