import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tools = ({ product }) => {
  const { _id,name, price, img, description, minimum, available } = product;
  const navigate=useNavigate();
  const heandle=id=>{
    console.log(id);
    navigate(`/purchase/${id}`)
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">Name:{name}</h2>
        <p>Price:${price}</p>
        <p>Minimum Order:{minimum}</p>
        <p>Available:{available}</p>
        <p>Description:{description}</p>
        <div class="card-actions">
          <Link to="/purchase">
            <button onClick={()=>heandle(_id)} class="btn btn-secondary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
