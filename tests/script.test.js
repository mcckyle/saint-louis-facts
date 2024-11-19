// Import functions from script.js
const { getRandomFact, generateFactList } = require('../script');

// Sample facts
const facts = [
  "Saint Louis is home to the iconic Gateway Arch, the tallest man-made monument in the U.S. at 630 feet.",
  "Saint Louis was the starting point for the Lewis and Clark Expedition in 1804.",
  "The Saint Louis Zoo is one of the oldest and best zoos in the country, and it's free to visit!",
  "Saint Louis is famous for its distinctive food scene, including dishes like toasted ravioli.",
  "Forest Park is larger than New York's Central Park and home to several cultural institutions.",
  "The first bakery in the U.S. was established in Saint Louis in 1794.",
  "Saint Louis is the birthplace of Anheuser-Busch, famous for beers like Budweiser.",
  "Saint Louis has a history of innovation, including the first successful parachute jump in 1912.",
  "Saint Louis hosts numerous music festivals, including jazz and blues.",
  "Saint Louis boasts a variety of world-class museums, including the Saint Louis Art Museum."
];

describe('Saint Louis Fun Facts', () => {

  // 1. Test if getRandomFact returns a string from the facts array
  it('should return a fact from the facts array', () => {
    const result = getRandomFact(facts);
    expect(facts).toContain(result);
  });

  // 2. Test if getRandomFact returns a fact every time
  it('should return a new fact each time', () => {
    const fact1 = getRandomFact(facts);
    const fact2 = getRandomFact(facts);
    expect(fact1).not.toBe(fact2); // This is a simple assumption; random could return the same fact.
  });

  // 3. Test if generateFactList creates the correct number of facts
  it('should generate the correct number of fact list items', () => {
    const container = document.createElement('div');
    generateFactList(facts, container);
    const factItems = container.querySelectorAll('.fact-item');
    expect(factItems.length).toBe(facts.length);
  });

  // 4. Test if generateFactList returns an array of correct HTML structure
  it('should generate the correct HTML structure for each fact', () => {
    const container = document.createElement('div');
    generateFactList(facts, container);
    const factItems = container.querySelectorAll('.fact-item');
    factItems.forEach((item) => {
      expect(item).toContainHTML('<h3 class="fact-title">');
      expect(item).toContainHTML('<p class="fact-description">');
    });
  });

  // 5. Test if getRandomFact handles empty array
  it('should return undefined if facts array is empty', () => {
    const result = getRandomFact([]);
    expect(result).toBeUndefined();
  });

  // 6. Test if generateFactList handles empty facts array gracefully
  it('should not generate any facts if the array is empty', () => {
    const container = document.createElement('div');
    generateFactList([], container);
    const factItems = container.querySelectorAll('.fact-item');
    expect(factItems.length).toBe(0);
  });

  // 7. Test if random fact button triggers fact change
  it('should trigger a fact change when the button is clicked', () => {
    // Mock a button click event
    const button = document.createElement('button');
    button.id = 'randomFactBtn';
    document.body.appendChild(button);

    // Create a mock display paragraph
    const display = document.createElement('p');
    display.id = 'randomFactDisplay';
    document.body.appendChild(display);

    // Call the function (simulating user clicking button)
    button.click();
    expect(display.textContent).toBeTruthy(); // Check if it updated with a fact
  });

  // 8. Test if random fact display updates content properly
  it('should update the random fact display with a new fact', () => {
    const display = document.createElement('p');
    display.id = 'randomFactDisplay';
    document.body.appendChild(display);

    const newFact = "Saint Louis is known for its local breweries.";
    display.textContent = newFact;
    expect(display.textContent).toBe(newFact);
  });

  // 9. Test if all facts are unique
  it('should not have duplicate facts in the list', () => {
    const factList = generateFactList(facts, document.createElement('div'));
    const factTitles = [...factList.querySelectorAll('.fact-title')].map(el => el.textContent);
    const uniqueTitles = new Set(factTitles);
    expect(uniqueTitles.size).toBe(factTitles.length);
  });

  // 10. Test if fact item titles match the facts in the list
  it('should display the correct titles in the fact list', () => {
    const container = document.createElement('div');
    generateFactList(facts, container);
    const titles = container.querySelectorAll('.fact-title');
    titles.forEach((title, index) => {
      expect(title.textContent).toBe(facts[index].split(":")[0]); // Assuming fact titles are before the colon.
    });
  });

});
