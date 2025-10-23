import React from 'react';

// Footer component to display company information, contacts, and social links
const Footer = () => {
  return (
    <footer className="footer">
      {/* Company section */}
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>

      {/* Contacts section */}
      <div className="footer-section">
        <h3>Contacts</h3>
        <p>Phone: +254 123 456 789</p>
        <p>Email: info@foodapp.com</p>
        <p>Address: Nairobi, Kenya</p>
      </div>

      {/* Social links section */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
