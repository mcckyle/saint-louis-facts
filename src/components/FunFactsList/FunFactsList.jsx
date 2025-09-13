//Filename: FunFactsList.jsx
//Author: Kyle McColgan
//Date: 12 September 2025
//Description: This file contains the facts list component for the Saint Louis Facts React project.

import React from 'react';
import { facts as defaultFacts } from "../../data/facts";
import './FunFactsList.css';

function FunFactsList({ facts = defaultFacts })
{
    return (
        <section
          id="facts"
          className="fun-facts"
          role="region"
          aria-labelledby="facts-heading"
        >
            <div className = "facts-container" data-testid="facts-container">
                <h2 id="facts-heading" className="fun-facts-heading">
                  Discover Fascinating Facts About <span className="highlight">Saint Louis</span>
                </h2>

                <ul className="fact-list">
                    {facts.map((fact, index) => (
                        <li key={index} className="fact-item fade-in-delay">
                            <h3 className="fact-title">{fact.title}</h3>
                            <p className="fact-description">{fact.description}</p>

                            {fact.sources?.length > 0 && (
                                <div className="fact-sources">
                                    <span className="sources-label">Sources:</span>
                                    {fact.sources.map((source, sourceIndex) => (
                                        <a
                                          key={sourceIndex}
                                          href={source.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="source-link"
                                         >
                                             {source.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default FunFactsList;
