//Filename: App.jsx
//Author: Kyle McColgan
//Date: 07 July 2025
//Description: Contains the React root component for the facts website.

import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import FunFactsList from './components/FunFactsList';
import Interactive from './components/Interactive';
import Footer from './components/Footer';

import './App.css';

function App()
{
  return (
      <div>
          <Header />
          <main className="main-content">
            <Intro />
            <FunFactsList />
            <Interactive />
          </main>
          <Footer />
      </div>
  );
}

export default App;
