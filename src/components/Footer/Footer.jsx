//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 18 December 2025
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
          Celebrating the enduring spirit of{" "}
          <strong className="footer-emphasis">Saint Louis</strong> - where
          history, creativity, and community rise beneath the Gateway Arch.
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
              <a href="#top" className="back-to-top" aria-label="Back to top">
                ↑ Top
              </a>
            </li>
          </ul>
        </nav>

        <small className="footer-meta">
          © {currentYear} <span className="footer-brand">Saint Louis Facts</span>
          <span className="footer-divider"> · </span>
          Crafted in Saint Louis by{" "}
          <span className="footer-author">Kyle McColgan</span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
