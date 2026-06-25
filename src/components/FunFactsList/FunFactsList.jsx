//Filename: FunFactsList.jsx
//Author: Kyle McColgan
//Date: 24 June 2026
//Description: This file contains the facts list for the Saint Louis Facts React project.

import React from "react";
import { motion } from "motion/react";
import { facts as defaultFacts } from "../../data/facts";
import "./FunFactsList.css";

function FunFactsList({ facts = defaultFacts })
{
  return (
    <section
      id="facts"
      className="fun-facts section"
      aria-labelledby="facts-heading"
    >
      <div className="section-content" data-testid="facts-container">
        <header className="section-header center-stack">
          <p className="section-eyebrow">Local history and culture</p>
          <h2 id="facts-heading" className="fun-facts-heading">
              Fascinating Facts About{" "}
              <span className="highlight">Saint&nbsp;Louis</span>
          </h2>
        </header>

        <ul
          className="fact-list"
          aria-label="Saint Louis historical and cultural facts"
        >
          {facts.map((fact, index) => (
            <motion.li
              key={fact.title ?? index}
              className="fact-card surface-card"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.32,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-64px" }}
            >
              <div className="fact-copy">
                <h3 className="fact-title">{fact.title}</h3>
                <p className="fact-description">{fact.description}</p>
              </div>
              {fact.sources?.length > 0 && (
                <div className="fact-sources">
                  <span className="sources-label">Sources</span>
                  <div className="sources-links">
                    {fact.sources.map((source, sourceIndex) => (
                      <a
                        key={sourceIndex}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link"
                        aria-label={`Visit ${source.name} source`}
                      >
                        {source.name}
                      </a>
                    ))}
                </div>
              </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FunFactsList;
