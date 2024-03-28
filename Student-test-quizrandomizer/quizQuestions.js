const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    options: ["Portuguese", "Spanish", "English", "French"],
    answer: "Portuguese"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Leo Tolstoy"
    ],
    answer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag", "Ge"],
    answer: "Au"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Saturn", "Jupiter"],
    answer: "Jupiter"
  },
  {
    question: "Who is known as the 'Father of Modern Physics'?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking"
    ],
    answer: "Albert Einstein"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question:
      "Which country is famous for its pyramids, including the Great Pyramid of Giza?",
    options: ["Greece", "Italy", "Egypt", "India"],
    answer: "Egypt"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo"
    ],
    answer: "Leonardo da Vinci"
  }
];

const getRandomQuiz = () => {
  return quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
};

export { quizQuestions, getRandomQuiz };
