import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import QuestionPage from "./components/question/QuestionPage";
import ResultPage from "./components/results/ResultPage";
import "./App.css";

function App() {
  return (
    <>
      <LandingPage />
      <QuestionPage />
      <ResultPage />
    </>
  );
}

export default App;
