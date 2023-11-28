import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function QuestionPage() {
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
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(data);

  return (
    <>
      <div className="quest-page">
        <h1 className="h1">Please Answer All Quesions</h1>
        <div className="questions"></div>

        <Link to={"/results"}>
          {" "}
          <button className="submit">Submit</button>
        </Link>
      </div>
    </>
  );
}

export default QuestionPage;
