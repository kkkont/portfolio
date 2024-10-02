import React, { useEffect, useState } from "react";
import aboutData from "../../assets/data/about.json";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  const [aboutInfo, setAboutInfo] = useState({});

  useEffect(() => {
    setAboutInfo(aboutData);
  }, []);

  return (
    <div className="about-container">
      <div className="about-image">
        <img src={process.env.PUBLIC_URL + "/images/me.png"} alt="About Me" />
      </div>
      <div className="about-text-container">
        <div className="about-text">
          <div className="hi-and-links">
            <p id="hi">Hi!</p>
            <div className="about-links">
              <a
                href={aboutInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={aboutInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <p id="about-text">{aboutInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
