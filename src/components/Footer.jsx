import React from 'react';
import './Footer.css'; // Import the CSS file for styling


function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          This project is inspired by the vibrant culture and history of Saint Louis. Special thanks to the city’s official resources and organizations for their dedication to preserving and sharing its heritage.
        </p>
        <div className="footer-links">
          <a
            href="https://www.stlouis-mo.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Visit the official Saint Louis government website"
          >
            Official Saint Louis Government
          </a>
          <a
            href="https://explorestlouis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Visit Explore Saint Louis"
          >
            Explore Saint Louis
          </a>
          <a
            href="#top"
            className="footer-link"
            aria-label="Back to top"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

