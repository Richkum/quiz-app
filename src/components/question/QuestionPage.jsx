import React from "react";
import { Link } from "react-router-dom";

function QuestionPage() {
  return (
    <>
      <div>Question Page</div>
      <Link to={"/results"}>
        {" "}
        <button className="submit">Submit</button>
      </Link>
    </>
  );
}

export default QuestionPage;
