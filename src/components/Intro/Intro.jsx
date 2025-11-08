//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 7 November 2025
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

        <p className="intro-subtext">
          Where the Mississippi meets a city of soul, creativity, and timeless character.
        </p>
        <p className="intro-subtext">
          From the Gateway Arch to its blues, baseball, and barbecue - explore the rhythm,
          resilience, and rich spirit that define the{" "}
          <span className="highlight">Gateway to the West</span>.
        </p>

        <div className="scroll-cue" aria-hidden="true" />
      </div>
    </section>
));

export default Intro;
