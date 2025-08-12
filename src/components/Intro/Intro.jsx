//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 11 August 2025
//Description: This file contains the React component for the facts Intro section.

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
        <h2 id="intro-heading" className="intro-title">
            Welcome to the Heart of Saint Louis
        </h2>

        <div className="intro-lead fade-in-delay">
            <p className="fade-in-delay">
                Saint Louis - where the mighty Mississippi meets a city of soul, flavour, and history.
            </p>
            <p className="fade-in-delay-2">
                From the Gateway Arch to blues, barbecue, and neighborhood gems - discover the best of the Gateway to the West.
            </p>
          <div className="intro-scroll-cue" aria-hidden="true"></div>
        </div>
    </section>
));

export default Intro;
