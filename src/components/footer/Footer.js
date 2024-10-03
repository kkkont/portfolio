import React, { useState, useEffect } from "react";
import aboutData from "../../assets/data/about.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  const [aboutInfo, setAboutInfo] = useState({});

  useEffect(() => {
    setAboutInfo(aboutData);
  }, []);
  return (
    <footer>
      <div className="footer-links">
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
      <p>Created by Kadri-Ketter Kont</p>
    </footer>
  );
}
export default Footer;
