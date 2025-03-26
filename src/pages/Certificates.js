import React, { useEffect, useState } from 'react';
import '../styles/Certificates.css';

import lightBg from '../images/light-pattern.webp';
import darkBg from '../images/dark-pattern.webp';

import frontendImg from '../certificates/Front end developer(Heacker rank).png';
import backendImg from '../certificates/Backend Developer.png';
import jsImg from '../certificates/JavaScript(Hacker Rank).png';
import softwareImg from '../certificates/Software Engineer(Hacker Rank).png';
import azureImg from '../certificates/Azure AI Fundamentals .png';
import mernImg from '../certificates/Mern Stack Developer simplilearn.png';

const certificates = [
  {
    title: 'Frontend Developer',
    source: 'HackerRank',
    image: frontendImg
  },
  {
    title: 'Backend Developer',
    source: 'HackerRank',
    image: backendImg
  },
  {
    title: 'JavaScript',
    source: 'HackerRank',
    image: jsImg
  },
  {
    title: 'Software Engineer',
    source: 'HackerRank',
    image: softwareImg
  },
  {
    title: 'Azure AI Fundamentals',
    source: 'Microsoft',
    image: azureImg
  },
  {
    title: 'MERN Stack Developer',
    source: 'Simplilearn',
    image: mernImg
  }
];

function Certificates() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

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
      className="certificates"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
      }}
    >
      <div className="certificates-header">
        <h2>Certificates</h2>
        <div className="underline"></div>
      </div>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index} onClick={() => setActiveCert(cert)}>
            <img src={cert.image} alt={cert.title} />
            <p className="cert-source">{cert.source}</p>
            <h3 className="cert-title">{cert.title}</h3>
          </div>
        ))}
      </div>

      {activeCert && (
        <div className="cert-modal" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveCert(null)}>×</button>
            <img src={activeCert.image} alt={activeCert.title} />
            <h3>{activeCert.title}</h3>
            <p>{activeCert.source}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
