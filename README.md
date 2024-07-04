# Quiz App

This project is a quiz application built with React. It presents a series of questions to the user, keeps track of the score, and includes a countdown timer for each question.

## Features

- Display questions with multiple choice options
- Keep track of the user's score
- Countdown timer for each question
- Display final score at the end of the quiz
- Option to restart the quiz

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/aakilshihafv/Quiz-App
    cd Quiz-App
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

- The application starts with the first question and a 10-second timer.
- Select an answer by clicking on the corresponding button.
- If the answer is correct, the score is incremented.
- The next question is presented after an answer is selected or the timer runs out.
- The final score is displayed at the end of the quiz with an option to restart the quiz.

## File Structure

- `App.js`: Main application component that handles the quiz logic, including question navigation, score tracking, and timer.
- `App.css`: Styles for the application.
- `questions.json`: Contains the list of questions, options, and correct answers.

## React Hooks Used

- `useState`: Used to create state variables `currentQ`, `score`, `showScore`, and `timer`.
- `useEffect`: Used to handle the countdown timer logic.

## Screenshots

![Quiz Design 1](https://github.com/aakilshihafv/Quiz-App/blob/main/image/quiz_design_1.png)
![Quiz Design 2](https://github.com/aakilshihafv/Quiz-App/blob/main/image/quiz_design_2.png)

## Contributing

Feel free to fork this repository, make enhancements, and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
