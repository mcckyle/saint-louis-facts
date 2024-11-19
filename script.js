// Sample data for Saint Louis Fun Facts
  const facts = [
    {
      title: "Gateway Arch",
      description: "The Gateway Arch in St. Louis is the tallest man-made monument in the United States, standing at 630 feet. It symbolizes the westward expansion of the United States."
    },
    {
      title: "Anheuser-Busch Brewery",
      description: "The Anheuser-Busch Brewery, located in St. Louis, is one of the largest breweries in the world and home to Budweiser, one of the most famous beers globally."
    },
    {
      title: "St. Louis Zoo",
      description: "The St. Louis Zoo, one of the oldest zoos in the country, is also one of the few to remain free of charge for visitors."
    },
    {
      title: "St. Louis Archipelago",
      description: "The city is situated on the western bank of the Mississippi River and features a rich cultural history with influences from French and Spanish settlers."
    },
    {
      title: "Missouri Botanical Garden",
      description: "The Missouri Botanical Garden, founded in 1859, is one of the oldest botanical gardens in the United States and covers 79 acres of lush greenery."
    },
    {
      title: "St. Louis Science Center",
      description: "A premier science museum with interactive exhibits, IMAX theaters, and a planetarium located in Forest Park."
    },
    {
      title: "St. Louis Cardinals",
      description: "The St. Louis Cardinals are one of the most successful Major League Baseball teams with 11 World Series titles, second only to the New York Yankees."
    },
    {
      title: "Cahokia Mounds",
      description: "Located just outside St. Louis, Cahokia Mounds is one of the most significant archaeological sites in the United States, showcasing the remains of a pre-Columbian Native American city."
    }
  ];

  // DOM Elements
  const factList = document.querySelector('.fact-list');
  const randomFactBtn = document.querySelector('#randomFactBtn');
  const randomFactDisplay = document.querySelector('#randomFactDisplay');

  // Function to generate a random fact
  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  }

  // Function to display a random fact on button click
  randomFactBtn.addEventListener('click', () => {
    const randomFact = getRandomFact();
    randomFactDisplay.innerHTML = `
      <strong>${randomFact.title}</strong><br>
      ${randomFact.description}
    `;
  });

  // Function to render facts into the fact list
  function renderFacts() {
    factList.innerHTML = '';
    facts.forEach(fact => {
      const factItem = document.createElement('li');
      factItem.classList.add('fact-item');

      factItem.innerHTML = `
        <h3 class="fact-title">${fact.title}</h3>
        <p class="fact-description">${fact.description}</p>
      `;

      factList.appendChild(factItem);
    });
  }

  // Initialize the facts display on page load
  renderFacts();

  // Smooth scroll functionality for links (in case we add internal navigation)
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Dynamic UI/UX Enhancements
  // Fact search (for large datasets in future versions)
  const searchInput = document.querySelector('#factSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredFacts = facts.filter(fact =>
        fact.title.toLowerCase().includes(searchTerm) ||
        fact.description.toLowerCase().includes(searchTerm)
      );
      renderFilteredFacts(filteredFacts);
    });
  }

  function renderFilteredFacts(filteredFacts) {
    factList.innerHTML = '';
    filteredFacts.forEach(fact => {
      const factItem = document.createElement('li');
      factItem.classList.add('fact-item');
      factItem.innerHTML = `
        <h3 class="fact-title">${fact.title}</h3>
        <p class="fact-description">${fact.description}</p>
      `;
      factList.appendChild(factItem);
    });
  }

  // Enhancing User Experience with smooth transitions
  factList.addEventListener('mouseover', (e) => {
    if (e.target.closest('.fact-item')) {
      e.target.closest('.fact-item').classList.add('fact-hover');
    }
  });

  factList.addEventListener('mouseout', (e) => {
    if (e.target.closest('.fact-item')) {
      e.target.closest('.fact-item').classList.remove('fact-hover');
    }
  });

  // Additional future enhancements (commented for now)
  // - Adding fact filtering by category or tags.
  // - Animating fact items on page load for smoother UX.
  // - Lazy load facts (for large datasets).
});
