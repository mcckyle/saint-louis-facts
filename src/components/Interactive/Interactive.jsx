//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 1 October 2025
//Description: This file contains the interactive component for the Saint Louis Facts React project.

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { facts } from "../../data/facts";
import './Interactive.css';

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
        <h2 id="interactive-title" className="interactive-title">
          Discover a <span className="highlight">Random Fact</span>
        </h2>

        <p className="interactive-subtitle">
          Click below to uncover something unique about Saint Louis.
        </p>

        <button
          className="interactive-button"
          onClick={getRandomFact}
          aria-label="Generate a random fact about Saint Louis."
        >
            Show Me a Fact
        </button>

      <AnimatePresence mode="wait">
        {randomFact && (
          <motion.div
            key={randomFact.title}
            id="interactive-fact"
            className="interactive-fact"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="fact-title">{randomFact.title}</h3>
            <p className="fact-description">{randomFact.description}</p>
          </motion.div>
        )}
        </AnimatePresence>
      </section>
    );
}
