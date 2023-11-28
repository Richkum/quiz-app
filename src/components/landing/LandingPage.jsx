import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div>
        <h1>Welcome to the Trivia App!</h1>
        <p>Instructions: ...</p>
        <Link to={"/question"}>
          <button>Start Game</button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
