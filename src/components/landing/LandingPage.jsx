import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="land-div">
        <h1 className="h1">Welcome to the Trivia App!</h1>
        <div className="instruct">
          <h3 className="h3">Instructions: ...</h3>
          <p className="p">the dkhu snduicvnecosdnvrekdm jsik</p>
          <p className="p"> ujcndhsytfevcscodimcscv undcbvssvatvvfk</p>
          <p className="p">okay tou cbkscf dnfkvcv msm</p>
        </div>
        <Link to={"/question"}>
          <button className="btn">Start Game</button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
