//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 27 July 2025
//Description: This file contains the React component for the facts Interactive section.

import React, { useState, useCallback } from "react";
import { facts } from "../../data/facts";
import './Interactive.css';

function Interactive()
{
    const [randomFact, setRandomFact] = useState(null);

    const getRandomFact = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setRandomFact(facts[randomIndex]);
    }, []);

    return (
        <section id="interactive" className="interactive" role="region" aria-labelledby="interactive-title">
            <h2 id="interactive-title" className="interactive-title">
              Discover a Random Fact
            </h2>

            <button
                className="interactive-button"
                onClick={getRandomFact}
                aria-label="Generate a random fact about Saint Louis."
            >
                Show Me a Fact
            </button>

            {randomFact && (
                <div id="interactive-fact" className="interactive-fact-display" aria-live="polite">
                    <h3 className="fact-title">{randomFact.title}</h3>
                    <p className="fact-description">{randomFact.description}</p>
                </div>
            )}
        </section>
  );
}

export default Interactive;
