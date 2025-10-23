import React from 'react';

// Footer component for app footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copyright">
          &copy; 2023 Food App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
