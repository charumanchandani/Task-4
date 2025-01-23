const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-btn");
  const scoreDisplay = document.getElementById("score-display");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectOption(option);
      li.appendChild(button);
      optionsContainer.appendChild(li);
    });
  
    nextButton.disabled = true;
  }
  
  function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
  
    if (isCorrect) {
      score++;
    }
  
    nextButton.disabled = false;
  }
  
  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  };
  
  function displayScore() {
    questionContainer.textContent = `Quiz Completed! Your score: ${score}/${questions.length}`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
  }
  
  loadQuestion();
  