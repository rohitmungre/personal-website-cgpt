import React from 'react';

const projects = [
  { id: 1, title: "Project A", description: "Description A", image: "projectA.jpg" },
  { id: 2, title: "Project B", description: "Description B", image: "projectB.jpg" }
];

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;