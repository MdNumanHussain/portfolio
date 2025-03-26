import React, { useEffect, useState } from 'react';
import '../styles/Resume.css';
import lightBg from '../images/light-pattern.webp';
import darkBg from '../images/dark-pattern.webp';
import { FaGraduationCap, FaBriefcase, FaTools, FaLaptopCode } from 'react-icons/fa';

function Resume() {
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
      className="resume"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
      }}
    >
      <div className="resume-container">
        {/* Education Section */}
        <section className="resume-section">
          <div className="section-title">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
          <div className="resume-inner-grid">
            <div className="resume-inner-card pink-bg">
              <p className="edu-duration">Sep 2021 – Aug 2024</p>
              <h3 className="edu-title">B.Sc. (Hons) in Computer Science (Software Engineering)</h3>
              <p className="edu-detail">First Class</p>
              <p className="edu-institution">University of Hertfordshire</p>
            </div>
            <div className="resume-inner-card purple-bg">
              <p className="edu-duration">Jul 2019 – Aug 2020</p>
              <h3 className="edu-title">B.Sc. in Computer Science</h3>
              <p className="edu-detail">First Class</p>
              <p className="edu-institution">
                University of Chittagong<br />
                <span className="edu-note">(Course incomplete due to COVID-19)</span>
              </p>
            </div>
            <div className="resume-inner-card blue-bg">
              <p className="edu-duration">Apr 2017 – Mar 2019</p>
              <h3 className="edu-title">HSC (A Levels)</h3>
              <p className="edu-detail">GPA: 5.00 / 5.00</p>
              <p className="edu-institution">
                Birshreshtha Munshi Abdur Rouf Public College<br />
                <span className="edu-note">(UK Equivalent: A Levels - A*)</span>
              </p>
            </div>
            <div className="resume-inner-card green-bg">
              <p className="edu-duration">Jan 2015 – Feb 2017</p>
              <h3 className="edu-title">SSC (GCSEs)</h3>
              <p className="edu-detail">GPA: 5.00 / 5.00</p>
              <p className="edu-institution">
                Gonipur High School<br />
                <span className="edu-note">(UK Equivalent: GCSEs - A*)</span>
              </p>
            </div>
          </div>
        </section>

 {/* Experience Section */}
<section className="resume-section">
  <div className="section-title">
    <FaBriefcase className="section-icon" />
    <h2>Experience</h2>
  </div>

  <div className="resume-experience-list">

    <div className="experience-item">
      <h3>Full Stack MERN Developer (Trainee)</h3>
      <p className="exp-company">Fortray Global Services LTD, London</p>
      <p className="exp-duration">Aug 2024 – Present</p>
    </div>

    <div className="experience-item">
      <h3>Store Assistant</h3>
      <p className="exp-company">Aldi</p>
      <p className="exp-duration">Jan 2024 – Jul 2024</p>
    </div>

    <div className="experience-item">
      <h3>Science & Computer Science Tutor</h3>
      <p className="exp-company">Ideal Tuition Centre, London, UK</p>
      <p className="exp-duration">Jan 2022 – Jul 2022</p>
    </div>

    <div className="experience-item">
      <h3>Maths Tutor</h3>
      <p className="exp-company">Prime Tuition, London, UK</p>
      <p className="exp-duration">Sep 2021 – Jan 2022</p>
    </div>

  </div>
</section>


{/* Working Skills Section */}
<section className="resume-section">
  <div className="section-title">
    <FaTools className="section-icon" />
    <h2>Working Skills</h2>
  </div>

  <div className="skills-grid">
    <div className="skill-item">
      <div className="skill-header">
        <span>Full Stack Development</span>
        <span>85%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill red" style={{ width: '85%' }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Backend Development</span>
        <span>70%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill purple" style={{ width: '70%' }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Frontend Development</span>
        <span>85%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill pink" style={{ width: '85%' }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Web Development</span>
        <span>80%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill blue" style={{ width: '80%' }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Software Engineering</span>
        <span>75%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill green" style={{ width: '75%' }}></div>
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-header">
        <span>Computer Science</span>
        <span>85%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill blue" style={{ width: '85%' }}></div>
      </div>
    </div>
  </div>
</section>


<section className="resume-section technical-skills-section">
  <div className="section-title">
    <FaLaptopCode className="section-icon" />
    <h2>Technical Skills</h2>
  </div>

  <div className="skills-group">
    <h3>Frontend</h3>
    <div className="skill-tags">
      <span>React.js</span>
      <span>JavaScript (ES6+)</span>
      <span>TypeScript</span>
      <span>HTML5</span>
      <span>CSS3</span>
      <span>Bootstrap</span>
      <span>Material-UI</span>
      <span>Redux</span>
      <span>jQuery</span>
      <span>AJAX</span>
      <span>JSON</span>
    </div>

    <h3>Backend</h3>
    <div className="skill-tags">
      <span>Node.js</span>
      <span>Express.js</span>
      <span>RESTful APIs</span>
      <span>Serverless Architecture</span>
      <span>Authentication (JWT, OAuth)</span>
    </div>

    <h3>Databases</h3>
    <div className="skill-tags">
      <span>MongoDB</span>
      <span>MySQL</span>
      <span>Firebase Realtime Database</span>
    </div>

    <h3>Cloud Services</h3>
    <div className="skill-tags">
      <span>AWS (EC2, S3, Lambda, API Gateway)</span>
      <span>Microsoft Azure (Functions, App Service, Storage Account)</span>
    </div>

    <h3>Version Control & CI/CD</h3>
    <div className="skill-tags">
      <span>Git</span>
      <span>GitHub</span>
      <span>GitLab</span>
      <span>Bitbucket</span>
      <span>Jenkins</span>
      <span>Docker CI/CD Pipelines</span>
    </div>

    <h3>Containerization & Orchestration</h3>
    <div className="skill-tags">
      <span>Docker</span>
      <span>Kubernetes</span>
    </div>

    <h3>Testing & QA</h3>
    <div className="skill-tags">
      <span>Jest</span>
      <span>Mocha</span>
      <span>Chai</span>
      <span>Cypress</span>
      <span>Test-Driven Development (TDD)</span>
    </div>

    <h3>Project Management & Collaboration</h3>
    <div className="skill-tags">
      <span>Jira</span>
      <span>Trello</span>
      <span>Agile Scrum</span>
      <span>SDLC</span>
    </div>

    <h3>Architectural Principles</h3>
    <div className="skill-tags">
      <span>MVC Architecture</span>
      <span>Component-Based Design</span>
      <span>REST API Design</span>
      <span>SOLID Principles</span>
    </div>

    <h3>Operating System</h3>
    <div className="skill-tags">
      <span>Windows</span>
      <span>macOS</span>
      <span>Linux (Ubuntu, CentOS)</span>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}

export default Resume;
