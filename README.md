![Workflow Status](https://github.com/mcckyle/saint-louis-facts/actions/workflows/ci.yml/badge.svg)

# Saint Louis Facts

🏙️ Discover interesting facts about Saint Louis, Missouri! Built with React for an interactive and engaging experience.

## 🌟 Features

- 🏙️ **Discover** a curated list of fascinating facts about Saint Louis.
- 🎲 **Surprise Yourself** with a random fact at the click of a button.
- 📱 **Responsive Design** for an enjoyable experience on any device.
- 🖱️ **Interactive and User-Friendly** interface to explore facts with ease.

## 🛠️ Technologies Used

- **React**: A robust JavaScript library for building dynamic and interactive user interfaces.
- **Vite**: A fast and modern build tool optimized for frontend development, enabling quick setup and hot module replacement (HMR).
- **HTML/CSS**: For structuring and designing a responsive, user-friendly application.
- **JavaScript (ES6+)**: Enhancing functionality with modern syntax and state management.
- **Deployment**: Hosted via [GitHub Pages](https://pages.github.com/) for easy public access.
- **Continuous Integration**: Automated testing and builds powered by [GitHub Actions](https://github.com/features/actions).

## 🚀 Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   Use the following command to clone the project repository to your local machine:
   ```bash
   git clone https://github.com/mcckyle/saint-louis-facts.git
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

You will see the landing page with facts about Greater Saint Louis. Click the **Show Me a Fact** button to display a random fact.

## Project Structure

```
saint-louis-facts/
│
├── public/
│   └── saint-louis-facts-favicon-02032026.svg
│
├── .github/
│   └── workflows/
│       └── ci.yml             # Github Actions config.
│
├── node_modules/
│   └── /...                   # Node JS dependencies.
│
├── dist/
│   └── /...                   # Vite build folder.
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── Intro/
│   │   │   ├── Intro.jsx
│   │   │   └── Intro.css
│   │   │
│   │   ├── FunFactsList/
│   │   │   ├── FunFactsList.jsx
│   │   │   └── FunFactsList.css
│   │   │
│   │   ├── Interactive/
│   │   │   ├── Interactive.jsx
│   │   │   └── Interactive.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │ 
│   ├── __mocks__/
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   │
│   ├── data/
│   │   └── facts.js
│   │
│   ├── __tests__/
│   │   ├── Header.test.jsx
│   │   ├── Intro.test.jsx
│   │   ├── FunFactsList.test.jsx
│   │   ├── Interactive.test.jsx
│   │   └── Footer.test.jsxx
│   │
│   ├── assets/
│   │   └── images/
│   │       └── gateway-arch-background.jpg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json              # Project metadata 
├── package-lock.json         # Project dependencies
├── .gitignore                # Project configuration
├── vite.config.js            # Project configuration
├── vitest.setup.js           # Project configuration
├── eslint.config.js          # Project configuration
├── index.html                # Project documentation
├── README.md                 # Project documentation
└── LICENSE                   # Project documentation
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

- **React** - for powering a dynamic and modern user experience.
- **CSS** - for bringing structure and styles to the application's design.
- **Vite** - for a lightning-fast and efficient development workflow.
- **Saint Louis** - for the plethora of history and culture, as well as serving as the backdrop for this project and a source of endless inspiration.
