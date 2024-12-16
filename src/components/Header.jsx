// src/components/Header.jsx
import React, { useState } from 'react';
//import gatewayArchImage from '../public/images/gateway-arch-background.jpg';
import './Header.css'; // Import the CSS file for styling

function Header()
{
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Saint Louis Facts</h1>
        <p className="header-description">Discover interesting and fun facts about the Gateway to the West!</p>
      </div>
    </header>
  );
}

export default Header;
