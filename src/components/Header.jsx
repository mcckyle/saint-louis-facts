// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

function Header()
{
  return (
    <header className="header" role="banner" aria-label="Page Header">
    <div className="container" data-testid="header-container">
    <h1 className="header-title">Saint Louis, Missouri</h1>
        <p className="header-description">Discover interesting facts about the Gateway to the West!</p>
    </div>
    </header>
  );
}

export default Header;
