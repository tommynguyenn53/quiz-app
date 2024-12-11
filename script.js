// Get references to UI elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex; // Variables to track shuffled questions and the current question index

// Event listener for the start button to begin the game
startButton.addEventListener('click', startGame);

// Event listener for the next button to proceed to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++; // Increment the question index
    setNextQuestion(); // Display the next question
});

// Function to start the game
function startGame() {
    console.log('Starting...'); // Debugging message to indicate the game has started
    startButton.classList.add('hide'); // Hide the start button
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle the questions array randomly
    currentQuestionIndex = 0; // Initialize the current question index
    questionContainerElement.classList.remove('hide'); // Show the question container
    setNextQuestion(); // Load the first question
}

// Function to set up the next question
function setNextQuestion() {
    resetState(); // Reset the UI to prepare for the next question
    showQuestion(shuffledQuestions[currentQuestionIndex]); // Display the current question
}

// Function to display a question and its answers
function showQuestion(question) {
    questionElement.innerText = question.question; // Set the question text
    question.answers.forEach((answer) => { // Iterate over the possible answers
        const button = document.createElement('button'); // Create a button for each answer
        button.innerText = answer.text; // Set the button text to the answer text
        button.classList.add('btn'); // Add styling class to the button
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Mark the correct answer using a data attribute
        }
        button.addEventListener('click', selectAnswer); // Add a click listener for selecting an answer
        answerButtonsElement.appendChild(button); // Add the button to the answer buttons container
    });
}

// Function to reset the UI state for the next question
function resetState() {
    nextButton.classList.add('hide'); // Hide the next button
    while (answerButtonsElement.firstChild) { // Remove all existing answer buttons
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target; // Get the button that was clicked
    const correct = selectedButton.dataset.correct; // Check if the selected answer is correct
    setStatusClass(document.body, correct); // Update the background color of the body based on correctness
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct); // Mark all answer buttons as correct or wrong
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide'); // Show the next button if there are more questions
    } else {
        startButton.innerText = 'Restart'; // Change the start button text to "Restart"
        startButton.classList.remove('hide'); // Show the start button for restarting the game
    }
}

// Function to set the status class (correct or wrong) on an element
function setStatusClass(element, correct) {
    clearStatusClass(element); // Clear any previous status classes
    if (correct) {
        element.classList.add('correct'); // Add the correct class if the answer is correct
    } else {
        element.classList.add('wrong'); // Add the wrong class if the answer is incorrect
    }
}

// Function to clear any status classes (correct or wrong) from an element
function clearStatusClass(element) {
    element.classList.remove('correct'); // Remove the correct class
    element.classList.remove('wrong'); // Remove the wrong class
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Paris', correct: true},
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Madrid', correct: false}
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Mars', correct: true},
            {text: 'Earth', correct: false},
            {text: 'Jupiter', correct: false},
            {text: 'Venus', correct: false}
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            {text: 'Blue Whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
            {text: 'Great White Shark', correct: false}
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            {text: 'William Shakespeare', correct: true},
            {text: 'Mark Twain', correct: false},
            {text: 'Charles Dickens', correct: false},
            {text: 'Jane Austen', correct: false}
        ]
    },
    {
        question: 'Which element has the chemical symbol O?',
        answers: [
            {text: 'Oxygen', correct: true},
            {text: 'Gold', correct: false},
            {text: 'Osmium', correct: false},
            {text: 'Hydrogen', correct: false}
        ]
    },
    {
        question: 'What is the square root of 64?',
        answers: [
            {text: '8', correct: true},
            {text: '6', correct: false},
            {text: '7', correct: false},
            {text: '9', correct: false}
        ]
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            {text: 'Mount Everest', correct: true},
            {text: 'K2', correct: false},
            {text: 'Kangchenjunga', correct: false},
            {text: 'Lhotse', correct: false}
        ]
    },
    {
        question: 'Which programming language is primarily used for web development?',
        answers: [
            {text: 'JavaScript', correct: true},
            {text: 'Python', correct: false},
            {text: 'C++', correct: false},
            {text: 'Java', correct: false}
        ]
    },
    {
        question: 'Which ocean is the largest?',
        answers: [
            {text: 'Pacific Ocean', correct: true},
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Arctic Ocean', correct: false}
        ]
    }
];
