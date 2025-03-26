import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaHackerrank, FaShareAlt, FaFolder } from 'react-icons/fa';
import homePicture from '../images/homePicture.png';
import lightPattern from '../images/light-pattern.webp';
import darkPattern from '../images/dark-pattern.webp';

function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleFormatChange = (format) => {
    setSelectedFormats((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  };

  const downloadFiles = () => {
    selectedFormats.forEach((format) => {
      const link = document.createElement('a');
      link.href = `/documents/Md Numan Hussain.${format}`;
      link.download = `Md Numan Hussain.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    setPopupOpen(false);
  };
  

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${isDarkMode ? darkPattern : lightPattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <img src={homePicture} alt="Profile" className="profile-pic" />
      <h1 className="name">Md Numan Hussain</h1>

      <p className="info-line">
        <span role="img" aria-label="briefcase">💼</span>
        <strong> Full Stack Developer</strong> || Fortray Global Services LTD
      </p>
      <p className="info-line">
        <span role="img" aria-label="graduate">🎓</span>
        <strong> Software Engineering</strong> (First Class) || University of Hertfordshire
      </p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/numanmahim/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/MdNumanHussain" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.me/447387747419" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://www.hackerrank.com/profile/numanhm618" target="_blank" rel="noreferrer"><FaHackerrank /></a>
        <a href="https://leetcode.com/u/mdnumanhussain/" target="_blank" rel="noreferrer"><FaShareAlt /></a>
      </div>

      <button className="download-btn" onClick={() => setPopupOpen(true)}>
        <FaFolder style={{ marginRight: '10px' }} /> Download CV
      </button>

      {popupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <h3><FaFolder /> Select CV Format</h3>
              <span className="popup-close" onClick={() => setPopupOpen(false)}>❌</span>
            </div>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedFormats.includes('pdf')}
                  onChange={() => handleFormatChange('pdf')}
                />
                PDF
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedFormats.includes('docx')}
                  onChange={() => handleFormatChange('docx')}
                />
                DOCX
              </label>
            </div>
            <button onClick={downloadFiles} className="popup-download">Download</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
