//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 1 October 2025
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
                    Inspired by the vibrant culture and history of Saint Louis. Special
                    thanks to the city’s organizations for preserving its legacy.
                </p>

                <nav className="footer-links" aria-label="Footer Navigation">
                  <ul>
                    <li>
                      <a
                        href="https://www.stlouis-mo.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Saint Louis Government
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://explorestlouis.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Explore Saint Louis
                      </a>
                    </li>
                    <li>
                      <a href="#top" className="footer-link back-to-top">
                        ↑ Back to Top
                      </a>
                    </li>
                  </ul>
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

