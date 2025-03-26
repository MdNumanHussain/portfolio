import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import aboutPicture from '../images/aboutPicture.png';
import lightBg from '../images/light-pattern.webp';
import darkBg from '../images/dark-pattern.webp';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

function About() {
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
      className="about"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
      }}
    >
      <div className="about-container">
        <h2 className="about-title">About <span className="underline" /></h2>

        <div className="about-content">
          <div className="about-image">
            <img src={aboutPicture} alt="Profile" />
          </div>

          <div className="about-info">
            <h3>Who am I?</h3>
            <p>
              I am a passionate Full Stack MERN Developer with strong skills in JavaScript, React,
              Node.js, and MongoDB. Currently working at <strong>Fortray Global Services LTD</strong>,
              I have gained hands-on experience building scalable applications and cloud deployments.
            </p>
            <p>
              I hold a <strong>First Class BSc (Hons) in Software Engineering</strong> from the University
              of Hertfordshire. I enjoy building things that live on the web and exploring new tech stacks in my spare time.
            </p>

            <h3 className="personal-info-title">Personal Info</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="icon-box pink"><FaPhoneAlt /></div>
                <div>
                  <div className="label">Phone</div>
                  <div className="value">+44 7387 747419</div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box pink"><FaMapMarkerAlt /></div>
                <div>
                  <div className="label">Address</div>
                  <div className="value">London, United Kingdom</div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box blue"><FaEnvelope /></div>
                <div>
                  <div className="label">Email</div>
                  <div className="value">numanhm618@gmail.com</div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box purple"><FaBirthdayCake /></div>
                <div>
                  <div className="label">Birthday</div>
                  <div className="value">20th April</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
