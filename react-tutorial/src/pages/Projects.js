import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ProjectInfo from '../data/projects.js';
import ProjectItem from '../components/ProjectItem';


const ProjectStyles = styled.div`
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`
export default function Projects() {
  const [projectData, setProjectData] = useState(ProjectInfo);
  return (
    <ProjectStyles>
      <div className="container">
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  )
}
