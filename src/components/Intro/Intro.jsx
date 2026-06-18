//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the intro component for the Saint Louis Facts React project.

import React from "react";
import "./Intro.css";

const Intro = React.forwardRef((props, ref) => (
    <section
      id="intro"
      ref={ref}
      className="intro section"
      aria-labelledby="intro-heading"
    >
      <div className="intro-inner">
        <header className="intro-header center-stack">
          <p className="section-eyebrow">An American city with soul</p>
          <h2 id="intro-heading" className="intro-title">
            Welcome to the{" "}
            <span className="highlight">
              Saint Louis
            </span>{" "}
            experience
          </h2>

          <p className="intro-lead">
            Where the Mississippi meets a city shaped by
            music, neighborhoods, history, and enduring character.
          </p>
        </header>

        <p className="intro-body">
          From the Gateway Arch to baseball traditions and
          beloved local food, Saint&nbsp;Louis carries the
          spirit of the{" "}
          <span className="highlight">Gateway to the West</span>.
        </p>
      </div>
    </section>
));

export default Intro;
