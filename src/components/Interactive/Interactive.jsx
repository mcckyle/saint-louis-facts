//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 21 August 2026
//Description: This file contains the interactive component for the Saint Louis Facts React project.

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { facts } from "../../data/facts";
import "./Interactive.css";

export default function Interactive()
{
    const [randomFact, setRandomFact] = useState(null);

    const getRandomFact = useCallback(() =>
    {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex]);
    }, []);

    return (
      <section
        id="interactive"
        className="interactive section"
        aria-labelledby="interactive-title"
      >
        <div className="section-content section-content--compact section-content--center">
          <header className="center-stack">
            <p className="section-eyebrow">A quieter kind of exploration</p>
            <h2 id="interactive-title" className="interactive-title">
              A Moment of <span className="highlight">Discovery</span>
            </h2>

            <p className="interactive-subtitle">
              Reveal a surprising piece of Saint&nbsp;Louis history,
              culture, architecture, or tradition.
            </p>
          </header>

          <button
            type="button"
            className="interactive-button"
            onClick={getRandomFact}
            aria-label="Reveal a random fact about Saint Louis."
          >
            Show Me a Fact
          </button>

          <div
            id="interactive-result"
            className="interactive-result"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              {randomFact && (
                <motion.article
                  key={randomFact.title ?? randomFact.description}
                  className="interactive-fact surface-card"
                  role="status" //Let status role handle announcements.
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <h3 className="interactive-fact-title">{randomFact.title}</h3>
                  <p className="interactive-fact-description">
                    {randomFact.description}
                  </p>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
}
