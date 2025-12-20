//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 7 November 2025
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
      <section id="interactive" className="interactive" aria-labelledby="interactive-title">
        <div className="interactive-container">
          <motion.h2
            id="interactive-title"
            className="interactive-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Discover a <span className="highlight">Random Fact</span>
          </motion.h2>

          <p className="interactive-subtitle">
            Click below to uncover something unique about Saint&nbsp;Louis.
          </p>

          <motion.button
            className="interactive-button"
            onClick={getRandomFact}
            aria-label="Generate a random fact about Saint Louis."
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
              Show Me a Fact
          </motion.button>

          <AnimatePresence mode="wait">
            {randomFact && (
              <motion.div
                key={randomFact.title}
                className="interactive-fact"
                aria-live="polite"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
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
