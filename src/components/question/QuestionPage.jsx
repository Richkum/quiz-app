// QuestionPage.js

import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function QuestionPage({ handleAnswerSubmit }) {
  const urlApi =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

  const { data, error, isLoading } = useQuery({
    queryKey: ["quizData", urlApi],
    queryFn: async () => {
      const response = await fetch(urlApi);
      const data = await response.json();
      return data;
    },
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const questions = data.results;
  const question = questions[currentQuestionIndex];

  const handleTrue = () => {
    setUserAnswers([
      ...userAnswers,
      { question: question.question, answer: "True" },
    ]);
    moveToNextQuestion();
  };

  const handleFalse = () => {
    setUserAnswers([
      ...userAnswers,
      { question: question.question, answer: "False" },
    ]);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { userAnswers, questions } });
    }
  };

  return (
    <div
      className="question-page"
      style={{ background: "linear-gradient(to right, #3498db, #2c3e50)" }}
    >
      <div className="header">
        <h1>Click either True or False</h1>
      </div>
      <div className="question-container">
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{question?.question}</p>
      </div>
      <div className="true-false">
        <button className="true" onClick={handleTrue}>
          True
        </button>
        <button className="false" onClick={handleFalse}>
          False
        </button>
      </div>
      <div className="submit-btn">
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={moveToNextQuestion}>Submit and View Results</button>
        ) : (
          <button onClick={moveToNextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;
