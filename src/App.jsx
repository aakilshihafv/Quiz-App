import { useEffect, useState } from "react";
import questionsData from "./questions.json";
import "./App.css";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0 && !showScore) {
      handleAnswerClick();
    }
    return () => clearInterval(interval);
  }, [timer, showScore]);

  const handleAnswerClick = (opt = null) => {
    if (opt && opt === questionsData[currentQ].correctOption) {
      setScore((score) => score + 1);
    }
    if (currentQ < questionsData.length - 1) {
      setCurrentQ((q) => q + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  };

  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            <h2>
              Your Score: {score}/{questionsData.length}
            </h2>
            <button onClick={handleRestart}>Restart</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQ + 1}</h2>
            <p>{questionsData[currentQ].question}</p>
            <div className="options">
              {questionsData[currentQ].options.map((opt, ind) => (
                <button key={ind} onClick={() => handleAnswerClick(opt)}>
                  {opt}
                </button>
              ))}
            </div>
            <div className="timer">
              Time Left: <span>{timer}s</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
