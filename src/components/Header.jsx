//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 07 July 2025
//Description: Contains the React component for the facts Header section.

import React, { useState } from 'react';
import './Header.css';

function Header()
{
    return (
        <header className="header" role="banner" aria-label="Page Header">
            <div className="header-container" data-testid="header-container">
                <h1 className="header-title">Saint&nbsp;Louis, Missouri</h1>

                    <p className="header-subtitle">
                        Explore fascinating facts about the Gateway to the West.
                    </p>
                    <div aria-hidden="true" className="header-chevron">▼</div>
            </div>
        </header>
  );
}

export default Header;
