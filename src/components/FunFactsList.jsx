import React from 'react';
import './FunFactsList.css'; // Import the CSS file

function FunFactsList() {
  // Array of facts
  const facts = [
    {
      title: "Gateway Arch",
      description: "The Gateway Arch in Saint Louis is the tallest man-made monument in the United States, standing at 630 feet. It symbolizes the westward expansion of the United States."
    },
    {
      title: "Anheuser-Busch Brewery",
      description: "The Anheuser-Busch Brewery, located in Saint Louis, is one of the largest breweries in the world and home to Budweiser, one of the most famous beers globally."
    },
    {
      title: "Saint Louis Zoo",
      description: "The Saint Louis Zoo, one of the oldest zoos in the country, is also one of the few to remain free of charge for visitors."
    },
    {
      title: "Saint Louis Archipelago",
      description: "The city is situated on the western bank of the Mississippi River and features a rich cultural history with influences from French and Spanish settlers."
    },
    {
      title: "Missouri Botanical Garden",
      description: "The Missouri Botanical Garden, founded in 1859, is one of the oldest botanical gardens in the United States and covers 79 acres of lush greenery."
    },
    {
      title: "Saint Louis Science Center",
      description: "A premier science museum with interactive exhibits, IMAX theaters, and a planetarium located in Forest Park."
    },
    {
      title: "Saint Louis Cardinals",
      description: "The Saint Louis Cardinals are one of the most successful Major League Baseball teams with 11 World Series titles, second only to the New York Yankees."
    },
    {
      title: "Cahokia Mounds",
      description: "Located just outside Saint Louis, Cahokia Mounds is one of the most significant archaeological sites in the United States, showcasing the remains of a pre-Columbian Native American city."
    }
  ];

  return (
    <section id="facts">
      <h2>Fun Facts About Saint Louis</h2>
      <ul className="fact-list">
        {facts.map((fact, index) => (
          <li key={index}>
            <h3>{fact.title}</h3>
            <p>{fact.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FunFactsList;
