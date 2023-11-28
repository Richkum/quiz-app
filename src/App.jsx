import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import QuestionPage from "./components/question/QuestionPage";
import ResultPage from "./components/results/ResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
