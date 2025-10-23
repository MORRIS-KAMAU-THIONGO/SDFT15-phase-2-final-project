import React from 'react';

// Footer component for app footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer links */}
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

        {/* Copyright notice */}
        <p className="footer-copyright">
          &copy; 2023 Food App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
