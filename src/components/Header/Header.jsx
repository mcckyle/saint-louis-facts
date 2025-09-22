//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 21 September 2025
//Description: This file contains the header component for the Saint Louis Facts React project Header section.

import React from 'react';
import gatewayArchImage from '../../assets/images/gateway-arch-background.jpg';
import './Header.css';

function Header({ scrollTargetRef })
{
    return (
        <header
          className="header"
          role="banner"
          aria-label="Saint Louis landing section"
        >
          <img
            src={gatewayArchImage}
            alt="Gateway Arch with the Saint Louis skyline"
            className="header-image"
          />
          <div className="header-overlay">
            <div className="header-content" data-testid="header-container">
                <h1 className="header-title">Saint&nbsp;Louis</h1>
                <p className="header-subtitle">
                    From the Gateway Arch to the Mississippi River - experience the heart of the Midwest.
                </p>
                <button
                  className="scroll-cue"
                  onClick={() =>
                    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                  aria-label="Scroll to Introduction"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
