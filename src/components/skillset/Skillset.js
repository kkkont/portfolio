import React, { useEffect, useState } from "react";
import "./Skillset.css";
import { FaJava } from "react-icons/fa";
import {
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
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Skillset() {
  return (
    <div class="skills">
      <h3 class="heading">Programming Languages</h3>
      <div class="skills-container">
        <div class="skill-item">
          <FaJava /> Java
        </div>
        <div class="skill-item">
          <FaPython /> Python
        </div>
        <div class="skill-item">
          <SiJavascript /> JavaScript
        </div>
        <div class="skill-item">
          <SiTypescript /> TypeScript
        </div>
      </div>

      <h3 class="heading">Frameworks and Libraries</h3>
      <div class="skills-container">
        <div class="skill-item">
          <FaReact /> React
        </div>
        <div class="skill-item">
          <FaAngular /> Angular
        </div>
        <div class="skill-item">
          <FaVuejs /> Vue.js
        </div>
        <div class="skill-item">
          <RiNextjsFill /> Next.js
        </div>
        <div class="skill-item">
          <FaNodeJs /> Node.js
        </div>
        <div class="skill-item">
          <SiExpress /> Express.js
        </div>
        <div class="skill-item">
          <SiSpring /> Spring Boot
        </div>
        <div class="skill-item">
          <SiTailwindcss /> Tailwind CSS
        </div>
      </div>
    </div>
  );
}

export default Skillset;
