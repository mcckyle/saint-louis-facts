import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import FunFactsList from './components/FunFactsList';
import Interactive from './components/Interactive';
import Footer from './components/Footer';
import './index.css'; // Optional: Your existing styles

function App() {
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
