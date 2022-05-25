import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Tools = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, img, description, minimum, available } = product;

  const handleProduct = (id) => {
    // console.log(id);
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">Name:{name}</h2>
        <p>Price:${price}</p>
        <p>Minimum Order:{minimum}</p>
        <p>Available:{available}</p>
        <p>Description:{description}</p>
        <div className="card-actions">
          <button
            onClick={() => handleProduct(_id)}
            className="btn btn-secondary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
