//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the React component for the facts Footer section.

import React from 'react';
import './Footer.css';

function Footer()
{
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    This project draws inspiration from the vibrant culture and rich history of Saint Louis. Special thanks to the city’s official organizations for their ongoing dedication to preserving and sharing its heritage.
                </p>
                <nav className="footer-links" aria-label="Footer navigation">
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
                </nav>
            </div>
        </footer>
  );
}

export default Footer;

