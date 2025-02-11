const quizData = [
    {
      question: "Which processors are supported by ECS H110M1-C2H and H110M4-C2H?",
      options: ["Intel Core I7", "Intel Core I3", "Pentium Celeron", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the main function of a computer fan?",
      options: ["Draw cooler air into the case", "Expel warm air from inside", "Move air across a heatsink", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What type of connectors do computer fans use?",
      options: ["3-pin connectors", "4-pin connectors", "USB connectors", "A and B"],
      answer: "A and B"
    },
    {
      question: "What does a power supply unit (PSU) convert?",
      options: ["Direct current (DC) to alternating current (AC)", "Alternating current (AC) to direct current (DC)", "AC to USB power", "DC to SATA power"],
      answer: "Alternating current (AC) to direct current (DC)"
    },
    {
      question: "Which connector is used to provide power to the motherboard?",
      options: ["24-pin ATX connector", "12V connector", "SATA power connector", "6-pin Molex connector"],
      answer: "24-pin ATX connector"
    },
    {
      question: "What does a SATA power connector supply power to?",
      options: ["Storage devices", "Graphics cards", "CPU", "Fans"],
      answer: "Storage devices"
    },
    {
      question: "What is the primary purpose of a SATA data connector?",
      options: ["Transmits power to storage devices", "Allows storage devices to communicate with the motherboard", "Provides power to the CPU", "Transmits audio signals"],
      answer: "Allows storage devices to communicate with the motherboard"
    },
    {
      question: "Which connector provides power to graphics cards and CPUs?",
      options: ["8-pin connector", "6-pin connector", "Molex connector", "SATA power connector"],
      answer: "8-pin connector"
    },
    {
      question: "Which part of a computer case connects the motherboard to external devices?",
      options: ["Front panel", "Back panel", "SATA data connector", "CPU socket"],
      answer: "Front panel"
    },
    {
      question: "What does the USB 3 front panel allow you to do?",
      options: ["Connect USB 3 devices to the motherboard", "Reset BIOS settings", "Connect power supply to the CPU", "Power the motherboard"],
      answer: "Connect USB 3 devices to the motherboard"
    },
    {
      question: "What is the purpose of the Audio Front Panel?",
      options: ["Allow you to connect the power button", "Provide audio ports for external devices", "Allow you to connect USB ports", "Both B and C"],
      answer: "Provide audio ports for external devices"
    },
    {
      question: "What is the purpose of the CMOS reset?",
      options: ["Clear corrupted BIOS settings", "Power the motherboard", "Cool the CPU", "Connect USB ports"],
      answer: "Clear corrupted BIOS settings"
    },
    {
      question: "Which of the following is a type of front panel connector?",
      options: ["USB 3.0", "CMOS Reset", "CPU power connector", "USB 2.0"],
      answer: "USB 3.0"
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
  