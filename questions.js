// TechSplore 2-25 Questions Database
// Edit this file to add your own questions!

const CUSTOM_QUESTIONS = [
    // EXAMPLE FORMAT:
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language", 
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0,  // Index of correct answer (0 = first option)
        category: "Web Development",
        difficulty: "easy",
        points: 100
    },
    
    // ADD YOUR QUESTIONS BELOW THIS LINE:
    // Copy the format above and modify with your questions
    
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2,
        category: "Programming",
        difficulty: "easy",
        points: 100
    },
    
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 2,
        category: "Web Development",
        difficulty: "easy",
        points: 100
    },
    
    // ADD MORE QUESTIONS HERE:
    // You can add as many questions as you want!
    // Just follow the same format
    
];

// Question settings
const QUESTION_CONFIG = {
    // Make questions obligatory (can't skip)
    obligatory: true,
    
    // Time limit per question in seconds (0 = no limit)
    timeLimit: 30,
    
    // Show correct answer after wrong selection
    showCorrectAnswer: true,
    
    // Randomize question order
    randomizeOrder: true,
    
    // Randomize option order
    randomizeOptions: false,
    
    // Minimum questions per game
    minQuestionsPerGame: 5,
    
    // Points for correct answer
    correctPoints: 100,
    
    // Points lost for wrong answer
    wrongPenalty: -25,
    
    // Bonus points for fast answers
    speedBonus: true,
    speedBonusMax: 50
};
