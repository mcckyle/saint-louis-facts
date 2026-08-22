//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 21 August 2026
//Description: This file contains the footer component for the Saint Louis Facts React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content section-content section-content--compact section-content--center">
        <div className="footer-copy">
          <p className="section-eyebrow">A city shaped by history and pride</p>

          <p className="footer-message">
            Celebrating the enduring spirit of
            Saint&nbsp;Louis through its history,
            architecture, music, neighborhoods,
            and community.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <a
                href="https://www.stlouis-mo.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
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
          <span>{currentYear} Saint Louis Facts</span>
          <span className="footer-credit">
            Designed in Saint Louis by{" "}
            <a
              className="footer-author"
              href="https://mcckyle.github.io/"
              target="_blank"
              rel="noopener noreferrer"
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
