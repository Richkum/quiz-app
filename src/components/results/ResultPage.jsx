import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.userAnswers || !state.questions) {
    return <p>No results data available.</p>;
  }

  const userAnswers = state.userAnswers;
  const questions = state.questions;

  const totalScore = userAnswers.reduce((score, { answer }, index) => {
    const correctAnswer = questions[index].correct_answer;
    return score + (answer === correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div
      className="results-page"
      style={{ background: "linear-gradient(to right, #3498db, #2c3e50)" }}
    >
      <div className="header">
        <h1>Your Results</h1>
      </div>
      <div className="user-answers">
        <h2>Your Answers</h2>
        <ul>
          {userAnswers.map(({ question, answer }, index) => (
            <li key={index}>
              <strong>Question {index + 1}: </strong>
              {question} - Your Answer: {answer}
            </li>
          ))}
        </ul>
      </div>
      <div className="total-score">
        <h2>Total Score</h2>
        <p>
          {totalScore} / {questions.length}
        </p>
      </div>
      <Link to={"/"}>
        <button className="restart">Play again</button>
      </Link>
    </div>
  );
}

export default ResultsPage;
