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
  randomFactDisplay.innerHTML = '';
  const title = document.createElement('strong');
  title.textContent = randomFact.title;
  randomFactDisplay.appendChild(title);
  randomFactDisplay.innerHTML += `<br>${randomFact.description}`;
});

// Function to render facts into the fact list
function renderFacts() {
  factList.innerHTML = '';
  facts.forEach(fact => {
    const factItem = document.createElement('li');
    factItem.classList.add('fact-item');

    const factTitle = document.createElement('h3');
    factTitle.classList.add('fact-title');
    factTitle.textContent = fact.title;

    const factDescription = document.createElement('p');
    factDescription.classList.add('fact-description');
    factDescription.textContent = fact.description;

    factItem.appendChild(factTitle);
    factItem.appendChild(factDescription);
    factList.appendChild(factItem);
  });
}

// Initialize the facts display on page load
renderFacts();

// Debounced search functionality
let debounceTimer;
const searchInput = document.querySelector('#factSearch');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredFacts = facts.filter(fact =>
        fact.title.toLowerCase().includes(searchTerm) ||
        fact.description.toLowerCase().includes(searchTerm)
      );
      renderFilteredFacts(filteredFacts);
    }, 300); // Adjust delay as needed (300ms)
  });
}

// Function to render filtered facts
function renderFilteredFacts(filteredFacts) {
  factList.innerHTML = '';
  filteredFacts.forEach(fact => {
    const factItem = document.createElement('li');
    factItem.classList.add('fact-item');
    const factTitle = document.createElement('h3');
    factTitle.classList.add('fact-title');
    factTitle.textContent = fact.title;

    const factDescription = document.createElement('p');
    factDescription.classList.add('fact-description');
    factDescription.textContent = fact.description;

    factItem.appendChild(factTitle);
    factItem.appendChild(factDescription);
    factList.appendChild(factItem);
  });
}

// Hover effects for facts list (CSS transition)
factList.addEventListener('mouseover', (e) => {
  const factItem = e.target.closest('.fact-item');
  if (factItem) {
    factItem.classList.add('fact-hover');
  }
});

factList.addEventListener('mouseout', (e) => {
  const factItem = e.target.closest('.fact-item');
  if (factItem) {
    factItem.classList.remove('fact-hover');
  }
});

// Enhancing UI/UX with smooth transitions
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
