*Solar System Quiz*
# Solar System Quiz Project

## Overview
This project is a web-based quiz application designed to test users' knowledge of the solar system. It features a login system for secure access, a series of multiple-choice questions, and a scoring system that provides feedback on performance.

## Implementation

### 1. Authentication
The application starts with a login section where users input their credentials. The JavaScript checks the credentials against predefined values before allowing access to the quiz section.

### 2. Quiz Structure
The quiz is structured using an array of objects, where each object contains a question, possible answers, and the index of the correct answer. This allows for easy expansion or modification of quiz questions.

### 3. Dynamic Quiz Display
When the quiz starts, the application dynamically creates the quiz interface by iterating through the array of questions. Each question and its corresponding answers are displayed as radio buttons.

### 4. Retry Functionality
Users can retry the quiz after completing it. The application resets the score and states of the answers to allow a fresh attempt.

## Challenges Faced

- **Authentication Logic**: Ensuring a smooth transition between the login and quiz sections required careful management of the display states in the DOM. I had to make sure that the elements were correctly shown or hidden based on the login status.

- **Dynamic Element Creation**: Generating the quiz questions and answers dynamically was initially challenging. I had to ensure the correct data was displayed and that each answer option was associated with the correct question.

- **Progress Tracking**: Implementing the progress tracker was a challenge. I initially added a progress tracker into my JS; however, it was not updating when selecting an answer on my webpage. I tried to find solutions online but unfortunately couldn't find one.

- **User Experience**: Designing the application to be user-friendly and visually appealing required a lot of CSS tweaks. Ensuring that the application looked good on both desktop and mobile screens took time and experimentation.

This solar system quiz project was a valuable learning experience that helped reinforce my skills in JavaScript, DOM manipulation, and CSS. I look forward to expanding its features and functionality in future iterations.

## View My Project

To view my project, [click here](https://brendandindialsece.github.io/assignment3/)!
