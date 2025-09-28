import "./Skillset.css";
import {
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiSpring,
  SiTailwindcss,
  SiKotlin
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Skillset() {
  return (
    <div className="skillspadd">
      <div className="skills">
        <h3 className="heading">Programming Languages</h3>
        <div className="skills-container">
          <div className="skill-item">
            <FaJava /> Java
          </div>
          <div className="skill-item">
            <SiKotlin /> Kotlin
          </div>
          <div className="skill-item">
            <FaPython /> Python
          </div>
          <div className="skill-item">
            <SiJavascript /> JavaScript
          </div>
          <div className="skill-item">
            <SiTypescript /> TypeScript
          </div>
        </div>

        <h3 className="heading">Frameworks and Libraries</h3>
        <div className="skills-container">
          <div className="skill-item">
            <FaReact /> React
          </div>
          <div className="skill-item">
            <FaAngular /> Angular
          </div>
          <div className="skill-item">
            <FaVuejs /> Vue.js
          </div>
          <div className="skill-item">
            <RiNextjsFill /> Next.js
          </div>
          <div className="skill-item">
            <FaNodeJs /> Node.js
          </div>
          <div className="skill-item">
            <SiExpress /> Express.js
          </div>
          <div className="skill-item">
            <SiSpring /> Spring Boot
          </div>
          <div className="skill-item">
            <SiTailwindcss /> Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
