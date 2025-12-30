//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
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
      <section id="interactive" className="interactive" role="region" aria-labelledby="interactive-title">
        <div className="interactive-container">
          <motion.h2
            id="interactive-title"
            className="interactive-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A moment of <span className="highlight">Discovery</span>
          </motion.h2>

          <p className="interactive-subtitle">
            Explore a surprising detail from the history and culture of
            Saint&nbsp;Louis.
          </p>

          <motion.button
            type="button"
            className="interactive-button"
            onClick={getRandomFact}
            aria-label="Reveal a random fact about Saint Louis."
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
              Show Me a Fact
          </motion.button>

          <AnimatePresence mode="wait">
            {randomFact && (
              <motion.article
                key={randomFact.title}
                className="interactive-fact"
                aria-live="polite"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
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
