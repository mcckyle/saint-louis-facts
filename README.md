# Saint Louis Fun Facts

A React web application showcasing fun and high-quality facts about Saint Louis, Missouri. The app highlights the city's rich history, iconic landmarks, and unique attractions, offering users an interactive way to discover more about this vibrant city.

## Features

- Display a list of fun facts about Saint Louis.
- Get a random fun fact on demand.
- User-friendly, responsive design with an interactive experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **HTML/CSS**: For structuring and styling the application.
- **JavaScript (ES6+)**: To manage state and interactivity.
- **React Hooks**: For managing state and side-effects.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/saint-louis-fun-facts.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd saint-louis-fun-facts
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application locally:
   ```bash
   npm start
   ```

2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

You will see the landing page with a list of fun facts about Saint Louis. Click the **Get a Fun Fact** button to display a random fact.

## Project Structure

```
saint-louis-fun-facts/
│
├── public/
│   ├── index.html            # The HTML file
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── FunFactsList.js   # Component displaying all facts
│   │   └── Interactive.js    # Component for random fact functionality
│   ├── App.js                # Main app component
│   └── index.js              # Entry point for React app
│
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React** for providing a powerful framework for building user interfaces.
- **CSS** for styling the application.
