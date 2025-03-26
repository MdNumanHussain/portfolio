import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const sections = [
  { id: 'home', label: '🏠 Home' },
  { id: 'about', label: '👤 About' },
  { id: 'resume', label: '📄 Resume' },
  { id: 'projects', label: '💻 Projects' },
  { id: 'certificates', label: '🏆 Certificates' },
  
  { id: 'contact', label: '📬 Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate(); // ✅ for routing

  const toggleMenu = () => {
    if (menuOpen) {
      document.querySelector('.nav-links').classList.add('closing');
      setTimeout(() => {
        setMenuOpen(false);
        document.querySelector('.nav-links').classList.remove('closing');
      }, 600); // matches animation duration
    } else {
      setMenuOpen(true);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleClick = (id) => {
    setActiveSection(id);
    toggleMenu(); // trigger animation

    // ✅ use React Router navigation
    if (id === 'home') {
      navigate('/');
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">Numan<span className="dot">.</span></div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '❌' : '☰'}
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleClick(section.id)}
            >
              {section.label}
            </button>
          ))}
          <button className="nav-btn mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
