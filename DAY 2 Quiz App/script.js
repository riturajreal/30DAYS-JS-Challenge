const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },

  {
    question: "India's Biggest individual YouTuber?",
    answers: [
      { text: "Ajey Nagar", correct: false },
      { text: "Amit Bhadana", correct: true },
      { text: "JR Creation", correct: false },
      { text: "Triggered Insaan", correct: false },
    ],
  },

  {
    question: "Upcoming Google's CEO?",
    answers: [
      { text: "Ajey Nagar", correct: false },
      { text: "Amit Bhadana", correct: false },
      { text: "Rituraj Jha", correct: true },
      { text: "Triggered Insaan", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// function to start quiz
function startQuiz() {
  // reset all the previous value
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";

  // then we show questions
  showQuestion();
}

// Show question function
function showQuestion() {
  // reset or clear previous answer options
  resetState();

  // adding question
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // adding answers from currentQuestion object
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.addEventListener("click", selectAnswer);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
  });
}

// reset or clear function
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// select answer Function
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    // increase score
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // if we selected any button
  Array.from(answerButtons.children).forEach((button) => {
    // maano agar humne wrong pick kra to to
    // shi answer automatic pick ho jayega
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    // after selecting one btn we can't select other btn
    button.disabled = true;
  });

  // now we show next button
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // next question
  } else {
    showScore(); // quiz complete ho gya hai
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// quiz start
startQuiz();
