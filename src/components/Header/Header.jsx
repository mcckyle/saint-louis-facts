//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 17 July 2026
//Description: This file contains the header component for the Saint Louis Facts React project.

import React from "react";
import gatewayArchImage from "../../assets/images/gateway-arch-background.jpg";
import "./Header.css";

function Header({ scrollTargetRef })
{
  const handleScroll = () =>
  {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    scrollTargetRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header-hero" aria-hidden="true">
        <img
          src={gatewayArchImage}
          alt=""
          className="header-image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="header-overlay" />
      </div>

      <div className="header-content" data-testid="header-content">
        <div className="header-copy">
        <p className="section-eyebrow header-eyebrow">Gateway to the West</p>
          <h1 id="page-title" className="header-title">Saint&nbsp;Louis</h1>
          <p className="header-subtitle">
            History and innovation along the Mississippi River.
          </p>
        </div>

        <button
          type="button"
          className="scroll-cue"
          onClick={handleScroll}
          aria-label="Scroll to the Saint Louis introduction section"
          aria-controls="intro"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
