import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../assets/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProject = projectsData.find(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject);
  }, [id]);
  const formatDescription = (text) => {
    if (text) {
      return text.split("\n").map((str, index) => (
        <span key={index}>
          {str}
          <br />
          <br />
        </span>
      ));
    }

    return null;
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="projectpage">
      <div className="projectpage-card">
        <img
          src={process.env.PUBLIC_URL + project.image}
          alt={project.title}
          className="projectpage-image"
        />
        <div className="projectpage-short-info">
          <div className="projectpage-title-and-links">
            <h3 className="projectpage-title">{project.title}</h3>
            <div className="projectpage-buttons">
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repository"
                className="repository-button"
              >
                <FontAwesomeIcon icon={faSquareGit} />
                &nbsp;Repository
              </a>
              <div onClick={() => navigate(-1)} className="back-button">
                Back
              </div>
            </div>
          </div>
          <p className="projectpage-short-description">
            {project.shortDescription}
          </p>
        </div>
      </div>
      <div className="projectpage-detailed-card">
        <p className="projectpage-detailed-description">
          {formatDescription(project.detailedDescription)}
        </p>
        <div className="projectpage-tech-used">
          <div className="tech-title">
            <FontAwesomeIcon icon={faCode} />
            <h3>Technologies Used</h3>
          </div>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
