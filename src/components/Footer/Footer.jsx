//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 4 June 2026
//Description: This file contains the footer component for the Saint Louis Facts React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <p className="section-eyebrow footer-eyebrow">A city shaped by history and pride</p>

          <p className="footer-message">
            Celebrating the enduring spirit of
            Saint&nbsp;Louis — a city shaped by history,
            architecture, music, and community.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul className="footer-links">
            <li>
              <a
                href="https://www.stlouis-mo.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                aria-label="Visit City of Saint Louis website"
              >
                City of Saint Louis
              </a>
            </li>

            <li>
              <a
                href="https://explorestlouis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                aria-label="Visit Explore STL website"
              >
                Explore STL
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link footer-top-link">
                Back to top
              </a>
            </li>
          </ul>
        </nav>

        <small className="footer-meta">
          © {currentYear}
          <span className="footer-brand">Saint Louis Facts</span>
          <span className="footer-separator" aria-hidden="true">·</span>
          <span className="footer-credit">
            Designed in Saint Louis by
            <a
              className="footer-author"
              href="https://mcckyle.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kyle McColgan's website"
            >
              Kyle McColgan
            </a>
          </span>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
