import React from "react";
import QUESTION from "../qns";

const Result = ({ userAnswer }) => {
  const correct = userAnswer.filter(
    (ans, index) => ans === QUESTION[index].option[0]
  );

  
  return <></>;
};

export default Result;
