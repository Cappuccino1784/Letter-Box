const question = document.getElementById('question');
const nextButton = document.getElementById('next-btn')
const container = document.getElementById('quiz-container')
const options = document.getElementById('options')

let currentQuestion = 0;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus","1","2"],
    correct: 2
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "10"],
    correct: 0
  }
];

function createButton(question, number, answer) {
  let newButton = document.createElement('button');
  newButton.innerText = answer;
  newButton.id = `${question}-${number}`
  return newButton;
}

function startQuiz() {
  question.innerText = `Câu ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
  nextButton.innerText = 'Next'
  for (i = 0; i < questions[currentQuestion].options.length; i++) {
    const newOption = createButton(currentQuestion, i, questions[currentQuestion].options[i]);
  }


}



