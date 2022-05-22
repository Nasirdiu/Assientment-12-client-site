import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, description } = review;
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-10 ">
      <div class="avatar">
        <div class="w-24 mx-auto mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
        <p>{description}</p>
        <div class="rating">
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
