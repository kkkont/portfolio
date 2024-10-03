import React, { useState, useEffect } from "react";
import About from "../components/about/About";
import ProjectCard from "../components/projectcard/ProjectCard"; // Ensure this is declared only once
import projectsData from "../assets/data/projects.json";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <About />
      <section className="projects-list">
        <p id="projects-header">Feel free to explore my projects!</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              shortDescription={project.shortDescription}
              image={project.image}
              repositoryLink={project.repositoryLink}
              projectId={project.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
