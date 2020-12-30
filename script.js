const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the currency of India?',
    answers: [
      { text: 'Peso', correct: false },
      { text: 'Rupee', correct: true },
      { text: 'Dollar', correct: false },
      { text: 'Yen', correct: false }
    ]
  },

  {
    question: 'Where did first chess started?',
    answers: [
      { text: 'Spain', correct: false },
      { text: 'India', correct: true },
      { text: 'China', correct: false },
      { text: 'Iraq', correct: false }
    ]
  },
  {
    question: 'Delhi is located along what river?',
    answers: [
      { text: 'the Yamuna', correct: true },
      { text: 'the Ganges', correct: false },
      { text: 'the Nile', correct: false },
      { text: 'the Brahmaptura', correct: false }
    ]
  },

  {
    question: 'Which institution operates the currency and credit system in India?',
    answers: [
      { text: 'RBI', correct: true },
      { text: 'Reserve Bank of India', correct: true },
      { text: 'Stock exchange', correct: false },
      { text: 'Government Bank', correct: false }
    ]
  },

  {
    question: 'When did radio broadcasting begin in India?',
    answers: [
      { text: '1960', correct: false },
      { text: '1936', correct: false },
      { text: '1927', correct: true },
      { text: '1957', correct: false }
    ]
  },

  {
    question: 'Which is the most populous state in India?',
    answers: [
      { text: 'Tamil Nadu', correct: false },
      { text: 'Maharastra', correct: true },
      { text: 'Kerala', correct: false },
      { text: 'Delhi', correct: false }
    ]
  },

  {
    question: 'When was the Indian Medical council ?',
    answers: [
      { text: '1975', correct: true },
      { text: '1971', correct: false },
      { text: '1985', correct: false },
      { text: '1955', correct: false }
    ]
  },
  {
    question: 'How many countries border India?',
    answers: [
      { text: '2', correct: false },
      { text: '14', correct: false },
      { text: '9', correct: false },
      { text: '6', correct: true }
    ]
  },

  {
    question: 'What is the National Tree of India?',
    answers: [
      { text: 'Neem', correct: false },
      { text: 'Mango', correct: false },
      { text: 'Banyan', correct: true},
      { text: 'Peeepal', correct: false }
    ]
  },
  {
    question: 'What Indian city is the capital of two states?',
    answers: [
      { text: 'Mumbai', correct: false },
      { text: 'Chandigarh', correct: true },
	{ text: 'Chennai', correct: false },
	{ text: 'Kolkata', correct: false }

    ]
  }
]