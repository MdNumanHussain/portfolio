import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';


import lightBg from '../images/light-pattern.webp';
import darkBg from '../images/dark-pattern.webp';
import nextgenImg from '../images/nextgen.png';
import tripzitImg from '../images/tripzit.png';
import hrportalImg from '../images/hrportal.png';
import foodifyImg from '../images/foodify.png';
import aldgateImg from '../images/aldgate.png';
import stockapiImg from '../images/stockapi.png';
import movingImg from '../images/moving.png';
import packersImg from '../images/packers.png';
import socializeImg from '../images/socialize.png';
import financeImg from '../images/finance.png';
const projects = [
  {
    title: "NextGen Coders",
    year: "2024",
    description: "Android app for learning Java, Python, JS, C++ with AI feedback and IDE.",
    github: "https://github.com/MdNumanHussain/NextGen_Coders",
    image: nextgenImg
  },
  {
    title: "Aldgate Recruitment",
    year: "2024",
    description: "Recruitment web app for hospitality sector.",
    github: "https://github.com/NumanMahim/aldgate-recruitment",
    image: aldgateImg
  },
  {
    title: "Foodify",
    year: "2024",
    description: "Food ordering website using React and REST APIs.",
    github: "https://github.com/NumanMahim/Foodify",
    image: foodifyImg
  },
  {
    title: "Socialize",
    year: "2024",
    description: "MERN social media app with post feed and auth.",
    github: "https://github.com/MdNumanHussain/Socialize",
    image: socializeImg
  },
  {
    title: "HR Portal",
    year: "2024",
    description: "MERN HR platform with employee dashboard, payroll & RBAC.",
    github: "https://github.com/NumanMahim/HR-Portal",
    image: hrportalImg
  },
  {
    title: "Packers and Movers App",
    year: "2024",
    description: "Relocation app with quote requests and booking.",
    github: "https://github.com/NumanMahim/packers-and-movers-app",
    image: packersImg
  },
  
 
  
  
  
  {
    title: "Stock API Backend",
    year: "2024",
    description: "Node backend for real-time stock data APIs.",
    github: "https://github.com/NumanMahim/stock-api-backend",
    image: stockapiImg
  },
  {
    title: "Moving Company",
    year: "2024",
    description: "Relocation services booking site.",
    github: "https://github.com/NumanMahim/Moving-Company",
    image: movingImg
  },
 
  
  {
    title: "Finance Master",
    year: "2024",
    description: "Track income, expenses, and goals with secure login.",
    github: "https://github.com/NumanMahim/finance-master",
    image: financeImg
  },
  {
    title: "TripzIt",
    year: "2024",
    description: "Travel planner app with photo spot tagging and trip route builder.",
    github: "https://github.com/NumanMahim/TripzIt",
    image: tripzitImg
  }
];

function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
    };
    updateMode();
    const observer = new MutationObserver(updateMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="projects"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
      }}
    >
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3 className="project-title">
                {project.title} <span className="project-year">({project.year})</span>
              </h3>
              <p className="project-description">{project.description}</p>
              <a className="github-link" href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
