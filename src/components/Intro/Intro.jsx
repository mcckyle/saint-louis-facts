//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 9 October 2025
//Description: This file contains the intro component for the Saint Louis Facts React project Intro section.

import React from 'react';
import './Intro.css';

const Intro = React.forwardRef((props, ref) => (
    <section
      id="intro"
      ref={ref}
      className="intro"
      role="region"
      aria-labelledby="intro-heading"
    >
      <div className="intro-content">
        <h2 id="intro-heading" className="intro-title">
          Welcome to the Heart of <span className="highlight">Saint&nbsp;Louis</span>
        </h2>

        <div className="intro-lead">
          <p>
              Where the mighty Mississippi meets a city of soul, creativity, and timeless character.
          </p>
          <p>
              From the Gateway Arch to its blues, baseball, and barbecue - explore the rhythm, resilience,
              and rich spirit that define the Gateway to the West.
          </p>
        </div>

        <div className="intro-scroll-cue" aria-hidden="true"></div>
      </div>
    </section>
));

export default Intro;
