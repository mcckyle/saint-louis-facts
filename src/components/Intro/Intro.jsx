//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 08 September 2025
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
        <h2 id="intro-heading" className="intro-title">
            Welcome to the Heart of Saint Louis
        </h2>

        <div className="intro-lead">
            <p>
                Saint Louis - where the mighty Mississippi meets a city of soul, flavour, and history.
            </p>
            <p>
                From the Gateway Arch to blues, barbecue, and neighborhood gems - discover the best of the Gateway to the West.
            </p>
          <div className="intro-scroll-cue" aria-hidden="true"></div>
        </div>
    </section>
));

export default Intro;
