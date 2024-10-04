import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

function ProjectCard({
  title,
  shortDescription,
  image,
  repositoryLink,
  projectId,
}) {
  return (
    <div className="project-card">
      <img
        src={process.env.PUBLIC_URL + image}
        alt={title}
        className="project-image"
      />
      <div className="project-short-info">
        <div className="project-title-and-links">
          <h3 className="project-title">{title}</h3>
          <div className="project-buttons">
            <a href={`/project/${projectId}`} className="view-details-button">
              Read More
            </a>
          </div>
        </div>
        <p className="project-short-description">{shortDescription}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  repositoryLink: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

export default ProjectCard;
