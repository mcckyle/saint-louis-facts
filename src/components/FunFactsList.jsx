//Filename: FunFactsList.jsx
//Author: Kyle McColgan
//Date: 07 July 2025
//Description: This file contains the React component for the facts list section.

import React from 'react';
import { facts as defaultFacts } from "../data/facts";
import './FunFactsList.css';

function FunFactsList({ facts = defaultFacts })
{
    return (
        <section id="facts" className="fun-facts" role="region" aria-labelledby="facts-heading">
            <div className = "facts-container" data-testid="facts-container">
                <h2 id="facts-heading" className="fun-facts-heading">Discover Fascinating Facts About Saint Louis </h2>

                <ul className="fact-list">
                    {facts.map((fact, index) => (
                        <li key={index} className="fact-item">
                            <h3 className="fact-title">{fact.title}</h3>
                            <p className="fact-description">{fact.description}</p>

                            {fact.sources?.length > 0 && (
                                <div className="fact-sources">
                                    <span>Sources:&nbsp;</span>
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
