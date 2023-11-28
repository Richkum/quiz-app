import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function QuestionPage() {
  // let amount = 1;
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
        <div className="questions">
          {data ? (
            <>
              {data.results?.map((quest) => (
                <div className="quest">
                  <h5 className="h5">Difficulty: {quest.difficulty}</h5>
                  <p className="p">{quest.question}</p>
                  <div className="true-false">
                    <button className="true">True</button>
                    <button
                      className="false"
                      // onClick={() => {
                      //   console.log(amount);
                      //   amount++;
                      // }}
                    >
                      False
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>Sorry And E rro Ocuured</div>
          )}
        </div>

        <Link to={"/results"}>
          {" "}
          <button className="submit">Submit</button>
        </Link>
      </div>
    </>
  );
}

export default QuestionPage;
