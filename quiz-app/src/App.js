import React, { useState } from 'react';
import './App.css';

const quizData = [
    { 
        question: 'Which car does Lewis Hamilton drive?', 
        options: ['Mercedes', 'Ferrari', 'Red Bull', 'McLaren'], 
        correctAnswer: 'Mercedes' 
    },
    { 
        question: 'What is Max Verstappen\'s nationality?', 
        options: ['Dutch', 'British', 'German', 'Australian'], 
        correctAnswer: 'Dutch' 
    },
    { 
        question: 'Which car does Charles Leclerc drive?', 
        options: ['Ferrari', 'Mercedes', 'Alpine', 'Aston Martin'], 
        correctAnswer: 'Ferrari' 
    },
    { 
        question: 'What is Fernando Alonso\'s nationality?', 
        options: ['Spanish', 'Italian', 'French', 'Brazilian'], 
        correctAnswer: 'Spanish' 
    },
    { 
        question: 'Which car does Lando Norris drive?', 
        options: ['McLaren', 'Red Bull', 'Ferrari', 'Williams'], 
        correctAnswer: 'McLaren' 
    },
    { 
        question: 'What is Sergio Perez\'s nationality?', 
        options: ['Mexican', 'American', 'Canadian', 'Argentinian'], 
        correctAnswer: 'Mexican' 
    },
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="container">
            <h1>Formula 1 Quiz</h1>
            {showResult ? (
                <div className="result">
                    <p>Your score: {score} out of {quizData.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question">
                        <p>{quizData[currentQuestion].question}</p>
                    </div>
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option" onClick={() => handleAnswerClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
