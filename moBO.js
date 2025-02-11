const quizData = [
  {
    question: "What part of the motherboard connects the CPU to the RAM?",
    options: ["Northbridge", "Southbridge", "Chipset", "VRM"],
    answer: "Northbridge"
  },
  {
    question: "Which component is responsible for powering the CPU?",
    options: ["VRM", "Southbridge", "BIOS", "PCIe Slot"],
    answer: "VRM"
  },
  {
    question: "What does BIOS stand for?",
    options: ["Basic Input Output System", "Basic Integrated Operating System", "Binary Input Output Setup", "Basic Interoperability System"],
    answer: "Basic Input Output System"
  },
  {
    question: "Which slot is used to install a graphics card on the motherboard?",
    options: ["PCIe", "DIMM", "SATA", "AGP"],
    answer: "PCIe"
  },
  {
    question: "What is the main power connector on a motherboard called?",
    options: ["24-pin ATX", "8-pin CPU", "6-pin PCIe", "SATA"],
    answer: "24-pin ATX"
  },
  {
    question: "Which component stores the motherboard's firmware settings?",
    options: ["CMOS Battery", "BIOS", "Chipset", "RAM"],
    answer: "CMOS Battery"
  },
  {
    question: "What is the purpose of SATA ports on a motherboard?",
    options: ["Connecting storage devices", "Providing power to the CPU", "Audio output", "Network connectivity"],
    answer: "Connecting storage devices"
  },
  {
    question: "Which part of the motherboard determines the type of CPU it supports?",
    options: ["CPU Socket", "Chipset", "VRM", "Northbridge"],
    answer: "CPU Socket"
  },
  {
    question: "Which type of memory module is installed in DIMM slots?",
    options: ["RAM", "ROM", "SSD", "GPU"],
    answer: "RAM"
  },
  {
    question: "What component on the motherboard handles USB connections?",
    options: ["Chipset", "BIOS", "VRM", "CPU Socket"],
    answer: "Chipset"
  }
];


  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;
let totalAttempts = 0;
let totalScore = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = ""; 
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-button");
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });

  quizContainer.style.display = "block"; 
  resultContainer.style.display = "none"; 
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  totalAttempts++;
  totalScore += score;

  quizContainer.style.display = "none"; 
  resultContainer.style.display = "block"; 
  resultContainer.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <p>Total attempts: ${totalAttempts}</p>
    <p>Overall score: ${totalScore}/${totalAttempts * quizData.length}</p>
    <button onclick="restartQuiz()">Retake Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}


showQuestion();
