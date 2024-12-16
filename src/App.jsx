import React from 'react';

import Intro from './components/Intro';
import FunFactsList from './components/FunFactsList';
import Interactive from './components/Interactive';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import Header from './components/Header';

function App()
{
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <FunFactsList />
        <Interactive />
      </main>
      <Footer />
    </div>
  );
}

export default App;
