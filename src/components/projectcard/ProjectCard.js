import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({
  title,
  extraTitle,
  shortDescription,
  image,
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
            <Link to={`/project/${projectId}`} className="view-details-button">
              Read More
            </Link>
          </div>
        </div>
        {extraTitle ? (
          <p className="project-short-description">{extraTitle}</p>
        ) : (
        <p className="project-short-description">{shortDescription}</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
