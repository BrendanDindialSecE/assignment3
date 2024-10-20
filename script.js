// Authentication Variables 
const correctUsername = "cosmo"; // Set the correct username
const correctPassword = "space"; // Set the correct password

// Add an event listener to the login button
document.getElementById("login-button").addEventListener("click", function() {
    // Get the entered username and password from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check the credentials
    if (username === correctUsername && password === correctPassword) {
        // If credentials are correct, hide the login section
        document.getElementById("login-section").style.display = "none";
        // Show the quiz section
        document.getElementById("quiz-container").style.display = "block";
        
        // Start the quiz
        startQuiz();
    } else {
        // Show an error message if the credentials are incorrect
        document.getElementById("login-error").innerText = "Incorrect username or password. Please try again.";
    }
});

// Define the quiz questions and answers
const questions = [
    {
        question: 'Which planet in our solar system is the closest to the Sun?',
        answers: ['Mercury', 'Venus', 'Earth', 'Mars'],
        correct: 0 // The index of the correct answer
    },
    {
        question: 'Which planet in our solar system has the most moons?',
        answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correct: 2 // The index of the correct answer
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correct: 1 // The index of the correct answer
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correct: 2 // The index of the correct answer
    },
    {
        question: 'Which planet in our solar system is furthest from the Sun?',
        answers: ['Neptune', 'Uranus', 'Pluto', 'Saturn'],
        correct: 0 // The index of the correct answer
    }
];

// Function to start the quiz
function startQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear the quiz container

    // Loop through each question and display it
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div'); // Create a new div for the question
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            ${question.answers.map((answer, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}"> <!-- Radio buttons for answers -->
                    ${answer}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement); // Add the question element to the quiz container
    });

    // Show the submit button and hide the try again button
    document.getElementById('submit-quiz').style.display = 'block';
    document.getElementById('try-again').style.display = 'none';
    document.getElementById('result').innerHTML = ''; // Clear the result area
};

// Add an event listener to the submit button
document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0; // Initialize score

    // Check each question for the selected answers
    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`); // Get selected answer
        if (selected && parseInt(selected.value) === question.correct) {
            score++; // Increment score if the answer is correct
            selected.parentElement.classList.add('correct'); // Highlight the correct answer
        } else if (selected) {
            selected.parentElement.classList.add('incorrect'); // Highlight the incorrect answer
        }
    });

    // Display the final score
    document.getElementById('result').innerHTML = `<h3>Your Final Score Is: ${score} / ${questions.length} Thanks for taking my quiz!</h3>`;
    document.getElementById('submit-quiz').style.display = 'none'; // Hide submit button
    document.getElementById('try-again').style.display = 'block'; // Show try again button
});

// Add an event listener to the try again button
document.getElementById('try-again').addEventListener('click', function() {
    // Reset all answer states by removing highlight classes
    document.querySelectorAll('.correct, .incorrect').forEach(el => {
        el.classList.remove('correct', 'incorrect');
    });

    startQuiz(); // Restart the quiz
});