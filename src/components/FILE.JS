import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import useLocalStorage from "use-local-storage";

function QuestionPage() {
  const [ttrue, setTtrue] = useState(true);
  const [ffalse, setFfalse] = useState(false);
  // const [answer, setAnswer] = useLocalStorage.getItem("answer" || []);

  // const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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

  function HandleTRue() {
    setTtrue(ttrue);
  }
  console.log(ttrue);

  function HandleFalse() {
    setFfalse(ffalse);
  }

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
                  <div
                    className="true-false"
                    // onSubmit={(e) => {
                    //   e.preventDefault();
                    //   console.log("true");
                    // }}
                  >
                    <button className="true" onClick={HandleTRue}>
                      True
                    </button>
                    <button className="false" onClick={HandleFalse}>
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
