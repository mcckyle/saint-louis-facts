![Workflow Status](https://github.com/kmccol1/saint-louis-facts/actions/workflows/ci.yml/badge.svg)

# Saint Louis Facts

🏙️ Discover interesting facts about Saint Louis, Missouri! Built with React for an interactive and engaging experience.

## 🌟 Features

- 🏙️ **Discover** a curated list of fascinating facts about Saint Louis.
- 🎲 **Surprise Yourself** with a random fact at the click of a button.
- 📱 **Responsive Design** for an enjoyable experience on any device.
- 🖱️ **Interactive and User-Friendly** interface to explore facts with ease.

## 🛠️ Technologies Used

- **React**: A robust JavaScript library for building dynamic and interactive user interfaces.
- **Vite**: A fast and modern build tool optimized for frontend development, ensuring quick setup and blazing-fast hot module replacement (HMR).
- **HTML/CSS**: For structuring and designing a responsive, user-friendly application.
- **JavaScript (ES6+)**: Enhancing functionality with modern syntax and state management.
- **React Hooks**: Simplifying state and side-effect management within functional components.
- **Deployment**: Hosted via [GitHub Pages](https://pages.github.com/) for easy public access.
- **Continuous Integration**: Automated testing and builds powered by [GitHub Actions](https://github.com/features/actions).

## 🚀 Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   Use the following command to clone the project repository to your local machine:
   ```bash
   git clone https://github.com/your-username/saint-louis-facts.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd saint-louis-facts
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application locally with Vite:
   ```bash
   npm run dev
   ```

2. Open your browser and visit the URL provided by Vite, typically:
   ```
   http://localhost:5173/saint-louis-facts/
   ```

You will see the landing page with facts about Greater Saint Louis. Click the **Get a Fun Fact** button to display a random fact.

## Project Structure

```
saint-louis-facts/
│
├── public/
│   ├── images/
│   │   └── gateway-arch-background.jpg
│   │
│   └── vite.svg
│
├── .github/
│   ├── workflows/
│       └── ci.yml             # Github actions config.
│
├── node_modules/
│   └── /...                   # Node JS dependencies.
│
├── dist/
│   ├── assets/
│   │   ├── index-XXXXXX.js    # Component for GitHub pages deployment.
│   │   └── index-XXXXXX.css   # Component for GitHub pages deployment.
│   │
│   ├── index.html             # Main app component
│   └── vite.svg               # Entry point for React app
│
├── src/
│   ├── components/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   │   ├── FunFactsList.css   # Fact component styling.
│   │   └── FunFactsList.jsx   # Component displaying all facts
│   │   ├── Header.css
│   │   └── Header.jsx
│   │   ├── Interactive.css
│   │   └── Interactive.jsx
│   │   ├── Intro.css
│   │   └── Intro.jsx
│   │ 
│   ├── __mocks__/
│   │   └── styleMock.js
│   │
│   ├── data/
│   │   └── facts.js
│   │
│   ├── __tests__/
│   │   ├── Footer.test.js
│   │   ├── Header.test.js
│   │   ├── Interactive.test.js
│   │   └── Intro.test.js
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Project documentation
├── .gitignore                # Project configuration
├── LICENSE                   # Project documentation
├── babel.config.cjs          # Project configuration
├── eslint.config.js          # Project configuration
├── index.html                # Project documentation
├── README.md                 # Project documentation
└── vite.config.js            # Project configuration
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
- **Vite**: For offering an exceptional build tool that significantly improved the development experience with its fast and efficient workflow.
- **Saint Louis**: For being an inspiring city full of history and culture, serving as the backdrop for this project and a source of endless inspiration.
