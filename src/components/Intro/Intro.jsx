//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 19 September 2026
//Description: This file contains the intro component for the Saint Louis Facts React project.

import { forwardRef } from "react";
import "./Intro.css";

const Intro = forwardRef((props, ref) => (
    <section
      id="intro"
      ref={ref}
      className="intro section"
      aria-labelledby="intro-heading"
    >
      <div className="section-content section-content--narrow section-content--center">
        <header className="center-stack">
          <p className="section-eyebrow">An American city with soul</p>
          <h2 id="intro-heading" className="intro-title">
            Welcome to <span className="highlight">Saint Louis</span>
          </h2>

          <p className="intro-lead">
            Where the Mississippi meets a city shaped by music,
            neighborhoods, history, and enduring character.
          </p>
        </header>

        <p className="intro-body">
          From the Gateway Arch to baseball traditions and beloved
          local food, Saint&nbsp;Louis carries the spirit of the{" "}
          <span className="highlight">Gateway to the West</span>.
        </p>
      </div>
    </section>
));

export default Intro;
