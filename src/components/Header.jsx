//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the React component for the facts Header section.

import React, { useState } from 'react';
import './Header.css';

function Header()
{
    return (
        <header className="header" role="banner" aria-label="Page Header">
            <div className="header-container" data-testid="header-container">
                <h1 className="header-title">Saint Louis, Missouri</h1>
                    <p className="header-subtitle">
                        Explore fascinating facts about the Gateway to the West.
                    </p>
            </div>
        </header>
  );
}

export default Header;
