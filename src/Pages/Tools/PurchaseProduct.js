import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const PurchaseProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const [purchase, setPurchase] = useState([]);
  const { id } = useParams();
  const { name, price } = purchase;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
  
    fetch("https://mighty-island-92006.herokuapp.com/orderProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Order Is Success");
        reset();
      });
  };

  useEffect(() => {
    fetch(`https://mighty-island-92006.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  return (
    <div className="card w-96 bg-base-200 shadow-xl mx-auto mt-16">
      <figure className="px-10 pt-10">
        <img src={purchase.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{purchase.name}</h2>
        <p>Description:{purchase.description}</p>
        <p>Price:{purchase.price}</p>
        <p className="text-red-500">Minimum Order:{purchase.minimum}</p>
        <p>Available:{purchase.available}</p>
        <div className="card-actions">
          <label for="booking-modal" className="btn modal-button btn-accent">
            Order Now
          </label>

          {/* modal */}

          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              {/* modal body */}
              <form className="px-2 py-4" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl text-secondary">Order Now ....!</h1>
                <input
                  placeholder="product name"
                  required
                  value={name}
                  className="input input-bordered w-full"
                  {...register("ProductName")}
                />
                <br />
                <input
                  placeholder="customer name"
                  required
                  value={user?.displayName}
                  className="input input-bordered my-4 w-full"
                  {...register("customer")}
                />
                <br />
                <input
                  placeholder="phone"
                  required
                  className="input input-bordered w-full"
                  {...register("phone")}
                />
                <br />
                <input
                  required
                  placeholder="address"
                  className="input input-bordered my-4 w-full"
                  {...register("address")}
                />
                <br />
                <input
                  required
                  placeholder="post code"
                  className="input input-bordered w-full"
                  {...register("code")}
                />
                <br />
                <input
                  placeholder="price"
                  // value={price}
                  className="input input-bordered my-4 w-full"
                  {...register("price")}
                />
                <br />
                <input
                  required
                  placeholder="customer email"
                  value={user?.email}
                  className="input input-bordered my-4 w-full"
                  {...register("customerEmail")}
                />
                <br />

                <input
                  required
                  placeholder="Order quantity"
                  className="input input-bordered w-full"
                  type="number"
                  {...register("minProduct", {
                    min: 500,
                    max: purchase?.available,
                  })}
                />
                <br />
                {errors.minProduct && (
                  <p className="text-red-800 font-bold w-full">
                    minimum order 500 and max order {purchase?.available}
                  </p>
                )}
                <br />
                <input className="mt-4 btn btn-success w-2/4" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
