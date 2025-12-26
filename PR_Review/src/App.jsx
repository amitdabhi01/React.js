import React from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewList from "./Components/ReviewList";

const App = () => {
  return (
    <>
      <ReviewForm addData={addData}/>
      <ReviewList/>
    </>
  );
};

export default App;
