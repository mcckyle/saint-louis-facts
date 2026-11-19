//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 18 November 2026
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
      if (!facts.length)
      {
        return;
      }
      const availableFacts = facts.filter((fact) => fact !== randomFact);
      const pool = availableFacts.length ? availableFacts : facts;
      const randomIndex = Math.floor(Math.random() * pool.length);
      setRandomFact(pool[randomIndex]);
    }, [randomFact]);

    return (
      <section
        id="interactive"
        className="interactive section"
        aria-labelledby="interactive-title"
      >
        <div className="section-content section-content--compact section-content--center">
          <header className="interactive-header center-stack">
            <p className="section-eyebrow">A quieter kind of exploration</p>
            <h2 id="interactive-title" className="interactive-title">
              A Moment of <span className="highlight">Discovery</span>
            </h2>
            <p className="interactive-subtitle">
              Uncover something unexpected about the history,
              culture, architecture, or traditions of Saint&nbsp;Louis.
            </p>
          </header>

          <button
            type="button"
            className="interactive-button"
            onClick={getRandomFact}
          >
            {randomFact ? "Show Me Another Fact" : "Show Me a Fact"}
            <span aria-hidden="true">↗</span>
          </button>

          <div
            className={`interactive-result${randomFact ? " has-fact" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              {randomFact ? (
                <motion.article
                  key={randomFact.title ?? randomFact.description}
                  className="interactive-fact"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="discovery-label">A Saint Louis discovery</span>
                  <h3 className="interactive-fact-title">{randomFact.title}</h3>
                  <p className="interactive-fact-description">
                    {randomFact.description}
                  </p>
                </motion.article>
              ) : (
                <motion.div
                  key="discovery-empty"
                  className="interactive-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="discovery-symbol" aria-hidden="true">✳</span>
                  <p>There is always more to discover.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
}
