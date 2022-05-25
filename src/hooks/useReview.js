import React, { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://mighty-island-92006.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review, setReview];
};

export default useReview;
