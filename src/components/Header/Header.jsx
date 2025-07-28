//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 27 July 2025
//Description: This file contains the React component for the facts Header section.

import React from 'react';
import gatewayArchImage from '../../assets/images/gateway-arch-background.jpg';
import './Header.css';

function Header({ scrollTargetRef })
{
    return (
        <header className="header" role="banner" aria-label="Page Header">
          <img
            src={gatewayArchImage}
            alt="Saint Louis Skyline"
            className="header-image"
          />
          <div className="header-overlay">
            <div className="header-content" data-testid="header-container">
                <h1 className="header-title">Saint&nbsp;Louis, Missouri</h1>
                    <p className="header-subtitle">
                        Explore fascinating facts about the Gateway to the West.
                    </p>
                    <div
                         aria-hidden="true"
                         className="header-chevron"
                         onClick={() => {
                             scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
                         }}
                    >
                        ▼
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Header;
