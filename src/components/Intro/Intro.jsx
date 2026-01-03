//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 31 December 2025
//Description: This file contains the intro component for the Saint Louis Facts React project Intro section.

import React from "react";
import "./Intro.css";

const Intro = React.forwardRef((props, ref) => (
    <section
      id="intro"
      ref={ref}
      className="intro"
      role="region"
      aria-labelledby="intro-heading"
    >
      <div className="intro-inner">
        <h2 id="intro-heading" className="intro-title">
          Welcome to the Heart of <span className="highlight">Saint&nbsp;Louis</span>
        </h2>

        <p className="intro-lead">
          Where the Mississippi meets a city shaped by soul, creativity, and
          enduring character.
        </p>

        <p className="intro-body">
          From the Gateway Arch to its blues, baseball, and barbecue,
          experience the rhythm, resilience, and rich spirit of the{" "}
          <span className="highlight">Gateway to the West</span>.
        </p>
      </div>
    </section>
));

export default Intro;
