//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 17 September 2025
//Description: This file contains the interactive component for the Saint Louis Facts React project.

import React, { useState, useCallback } from "react";
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

            {randomFact && (
                <div
                  id="interactive-fact"
                  className="interactive-fact fade-up"
                  aria-live="polite"
                >
                    <h3 className="fact-title">{randomFact.title}</h3>
                    <p className="fact-description">{randomFact.description}</p>
                </div>
            )}
        </section>
    );
}
