import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import QuestionPage from "./components/question/QuestionPage";
import ResultPage from "./components/results/ResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
