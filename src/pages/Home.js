import { useState, useEffect } from "react";
import About from "../components/about/About";
import ProjectCard from "../components/projectcard/ProjectCard";
import projectsData from "../assets/data/projects.json";
import Skillset from "../components/skillset/Skillset";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <About />
      <Skillset />
      <section className="projects-list">
        <p id="projects-header">Feel free to explore my projects!</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              extraTitle={project.extraTitle}
              shortDescription={project.shortDescription}
              image={project.image}
              projectId={project.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
