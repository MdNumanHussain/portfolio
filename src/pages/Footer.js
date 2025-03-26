import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Numan. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
