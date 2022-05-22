import React from "react";

const Tools = ({ product }) => {
  const { name, price, stock, img, category,ratingsCount } = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{category}</h2>
        <p>{name}</p>
        <p>Price:${price}</p>
        <p>Minimum Order{stock}</p>
        <p>Available:{ratingsCount}</p>
        <div class="card-actions">
          <button class="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
