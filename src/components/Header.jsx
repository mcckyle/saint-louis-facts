// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Saint Louis Fun Facts</h1>
        <p>Discover interesting and fun facts about the Gateway to the West!</p>
      </div>
    </header>
  );
}

export default Header;
