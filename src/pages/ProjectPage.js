import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../assets/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDownload } from "@fortawesome/free-solid-svg-icons";
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
              {project.repositoryLink && (
                <button>
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
                </button>)}
              <button onClick={() => navigate(-1)} className="back-button">
                Back
              </button>
            </div>
          </div>
          <p className="projectpage-short-description">
            {project.shortDescription}
          </p>
        </div>
      </div>
      <h3 className="projectpage-extratitle">{project.extraTitle}</h3>
      <div className="projectpage-detailed-card">
        <p className="projectpage-detailed-description">
          {formatDescription(project.detailedDescription)}
        </p>
        <div className="projectpage-extra-info">
          {project.technologies && (
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
          )}
          {project.downloadPDFLink && (
            <button>
              <a
                href={process.env.PUBLIC_URL + project.downloadPDFLink}
                download
                rel="noopener noreferrer"
                aria-label="Download"
                className="download-button"
              >
                <FontAwesomeIcon icon={faDownload} />
                &nbsp;Download PDF
              </a>
            </button>)}
        </div>
      </div>
      {project.youtubeLink && (
            <div className="youtube-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${project.youtubeLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
    </div>
  );
};

export default ProjectPage;
