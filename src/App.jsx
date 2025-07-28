//Filename: App.jsx
//Author: Kyle McColgan
//Date: 27 July 2025
//Description: This file contains the React root component for the facts website.

import React, {useRef} from 'react';
import Header from './components/Header/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import FunFactsList from './components/FunFactsList/FunFactsList.jsx';
import Interactive from './components/Interactive/Interactive.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

function App()
{
  const introRef = useRef(null);

  return (
      <div>
          <Header scrollTargetRef={introRef} />
          <main className="main-content">
            <Intro ref={introRef} />
            <FunFactsList />
            <Interactive />
          </main>
          <Footer />
      </div>
  );
}

export default App;
