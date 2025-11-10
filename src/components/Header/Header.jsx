//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 10 November 2025
//Description: This file contains the header component for the Saint Louis Facts React project Header section.

import React from "react";
import gatewayArchImage from "../../assets/images/gateway-arch-background.jpg";
import "./Header.css";

function Header ({ scrollTargetRef })
{
  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="header"
      role="banner"
      aria-label="Saint Louis landing section with skyline and Gateway Arch."
    >
      <img
        src={gatewayArchImage}
        alt="Grayscale landscape photograph of the Saint Louis skyline with the Gateway Arch."
        className="header-image"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />

      <div className="header-overlay">
        <div className="header-content" data-testid="header-content">
          <h1 className="header-title">
            Saint&nbsp;Louis<span className="header-dot">·</span>
          </h1>
          <p className="header-subtitle">
            Gateway to the West - where history, architecture, and innovation
            meet along the Mississippi.
          </p>

          <button
            className="scroll-cue"
            onClick={handleScroll}
            aria-label="Scroll to introduction."
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
