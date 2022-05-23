import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";

const PurchaseProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const [purchase, setPurchase] = useState([]);
  const { id } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-16">
      <figure class="px-10 pt-10">
        <img src={purchase.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Name:{purchase.name}</h2>
        <p>Description:{purchase.description}</p>
        <p>Price:{purchase.price}</p>
        <div class="card-actions">
          <label for="booking-modal" class="btn modal-button btn-accent">
            Order Now
          </label>

          <input type="checkbox" id="booking-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 justify-items-center mt-3"
              >
                <input
                  type="text"
                  value={user?.displayName || ""}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  value={user?.email || ""}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Post Code"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  placeholder="Increase"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  placeholder="Decrease"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="Submit"
                  value="Submit"
                  className="btn btn-secondary w-full max-w-xs "
                  readOnly
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
