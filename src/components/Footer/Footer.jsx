//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 12 September 2025
//Description: This file contains the footer component for the Saint Louis Facts React project.

import React from 'react';
import './Footer.css';

function Footer()
{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo" aria-label="Site Footer">
            <div className="footer-container">
                <p className="footer-text">
                    This project draws inspiration from the vibrant culture and rich
                    history of Saint Louis. Special thanks to the city’s official
                    organizations for their dedication to preserving its legacy.
                </p>

                <nav
                  className="footer-links"
                  aria-label="Footer Navigation Links"
                >
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
                        className="footer-link footer-back-to-top"
                        aria-label="Back to top"
                    >
                        ↑ Back to Top
                    </a>
                </nav>

                <small className="footer-copy">
                  &copy; {currentYear} Saint Louis Facts. Designed in{" "}
                  <span className="footer-highlight">Saint Louis</span> by{" "}
                  <span className="footer-author">Kyle McColgan</span>
                </small>
            </div>
        </footer>
    );
}

export default Footer;

