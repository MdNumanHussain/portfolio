import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
import lightBg from '../images/light-pattern.webp';
import darkBg from '../images/dark-pattern.webp';

// Icons
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const updateMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
    };
    updateMode();
    const observer = new MutationObserver(updateMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const botToken = '7073059910:AAE-KjA9a8wHzI9iDkmOfFa6EWuJhLcZOHQ';
    const chatId = '7165607497';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: fullMessage }),
      });

      const data = await response.json();
      if (data.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setResponseMessage('Numan got your message on Telegram. He will reply via email within 24 hours.');
      } else {
        setResponseMessage('❌ Failed to send message.');
      }
    } catch {
      setResponseMessage('❌ Error sending message.');
    }
  };

  return (
    <div
      className="contact"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
      }}
    >
      <div className="contact-container">
        <h2 className="contact-title">Contact <span className="underline" /></h2>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-box pink">
              <FiPhone className="icon" />
              <div>
                <h4>Phone:</h4>
                <p>+44 7387 747419</p>
              </div>
            </div>
            <div className="contact-box blue">
              <GoLocation className="icon" />
              <div>
                <h4>Address:</h4>
                <p>London, United Kingdom</p>
              </div>
            </div>
            <div className="contact-box pink">
              <HiOutlineMail className="icon" />
              <div>
                <h4>Email:</h4>
                <p>numanhm618@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-text">
              I'm always open to discussing product <strong>development work or partnerships.</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Message *"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              {responseMessage && <p className="response">{responseMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
