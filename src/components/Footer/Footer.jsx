//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 27 October 2025
//Description: This file contains the footer component for the Saint Louis Facts React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-inner">
        <p className="footer-message">
          Inspired by the vibrant spirit of Saint Louis - where history meets
          innovation, and resilience shapes its rhythm. Special thanks to those
          who preserve and celebrate the city's living legacy.
        </p>

        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-links">
            <li>
              <a
                href="https://www.stlouis-mo.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Saint Louis Gov
              </a>
            </li>
            <li>
              <a
                href="https://explorestlouis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Explore STL
              </a>
            </li>
            <li>
              <a href="#top" className="footer-link back-to-top">
                ↑ Back to Top
              </a>
            </li>
          </ul>
        </nav>

        <small className="footer-meta">
          © {currentYear}{" "}
          <span className="footer-brand">Saint Louis Facts</span> · Designed in{" "}
          <span className="footer-highlight">Saint Louis</span> by{" "}
          <span className="footer-author">Kyle McColgan</span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;

