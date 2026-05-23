//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 22 May 2026
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
        <div className="interactive-container">
          <header className="interactive-header">
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
            aria-controls="interactive-result"
          >
              Show Me a Fact
          </button>

          <AnimatePresence mode="wait">
            {randomFact && (
              <motion.article
                key={randomFact.title ?? randomFact.description}
                id="interactive-result"
                className="interactive-fact"
                aria-live="polite"
                aria-atomic="true"
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <h3 className="fact-title">{randomFact.title}</h3>
                <p className="fact-description">{randomFact.description}</p>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
}
