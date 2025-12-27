import React from "react";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);

  const getFormData = (data) => {
    setReviews((prev) => [...prev, data]);
  };

  return (
    <>
      <ReviewForm data={getFormData} />
      <ReviewList listData={reviews} />
    </>
  );
};

export default ReviewContainer;
