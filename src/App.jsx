//Filename: App.jsx
//Author: Kyle McColgan
//Date: 5 February 2026
//Description: This file contains the App component for the Saint Louis facts project.

import React, { useRef } from "react";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import FunFactsList from "./components/FunFactsList/FunFactsList.jsx";
import Interactive from "./components/Interactive/Interactive.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  const introRef = useRef(null);

  return (
    <div className="app">
      <Header scrollTargetRef={introRef} />

      <main
        id="main"
        className="main"
        aria-label="Saint Louis facts and heritage"
      >
        <Intro ref={introRef} />
        <FunFactsList />
        <Interactive />
      </main>

      <Footer />
    </div>
  );
}

export default App;
