//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 12 October 2025
//Description: This file contains the interactive component for the Saint Louis Facts React project.

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { facts } from "../../data/facts";
import "./Interactive.css";

export default function Interactive()
{
    const [randomFact, setRandomFact] = useState(null);

    const getRandomFact = useCallback(() => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex]);
    }, []);

    return (
      <section
        id="interactive"
        className="interactive"
        role="region"
        aria-labelledby="interactive-title"
      >
        <div className="interactive-container">
          <h2 id="interactive-title" className="interactive-title">
            Discover a <span className="highlight">Random Fact</span>
          </h2>

          <p className="interactive-subtitle">
            Click below to uncover something unique about Saint Louis.
          </p>

          <motion.button
            className="interactive-button"
            onClick={getRandomFact}
            aria-label="Generate a random fact about Saint Louis."
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
              Show Me a Fact
          </motion.button>

        <AnimatePresence mode="wait">
          {randomFact && (
            <motion.div
              key={randomFact.title}
              className="interactive-fact"
              aria-live="polite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45}}
            >
              <h3 className="fact-title">{randomFact.title}</h3>
              <p className="fact-description">{randomFact.description}</p>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </section>
    );
}
