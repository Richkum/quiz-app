import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="header">
          <h1 className="h1">Welcome to the Trivia Quiz!</h1>
        </div>
        <div className="instructions">
          <p className="p">
            Test your knowledge with our challenging true or false questions.
            Answer each question and proceed to the next one. You can't go back,
            so choose wisely!
          </p>
        </div>
        <div className="cta">
          <Link to="/question">
            <button className="start-btn">Start Quiz</button>
          </Link>
        </div>
        <div className="attribution">
          Questions provided by{" "}
          {/* <a
            href="https://opentdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Trivia Database
          </a> */}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
