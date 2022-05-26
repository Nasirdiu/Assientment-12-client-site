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
  const { name, price, img, description, minimum, available } = purchase;
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
      .then((data) => {
        setPurchase(data);
        reset();
      });
  }, []);

  return (
    <div className="bg-slate-600 ">
      <h1 className="text-white text-3xl text-center uppercase font-bold">
        Order Option...
      </h1>
      <section className="flex justify-center items-center  ">
        <div className="flex-1 hidden lg:block mt-10">
          <img className="w-45 m-28 rounded h-60 " src={img} alt="" />
        </div>
        <div className="flex-1  px-20">
          <h2 className="text-xl text-primary font-bold">{name}</h2>
          <div className="text-white pb-5">
            <p>Description:{purchase.description}</p>
            <p>Price:${purchase.price}</p>
            <p className="text-red-500">Minimum Order:{purchase.minimum}</p>
            <p>Available:{purchase.available}</p>
          </div>

          <div className="card-actions">
            <label
              for="booking-modal"
              className="btn modal-button btn-secondary mt-5"
            >
              Order Now
            </label>

            {/* modal */}

            <input
              type="checkbox"
              id="booking-modal"
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                {/* modal body */}
                <form className="px-2 py-4 bg-slate-600"  onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-2xl text-secondary text-center">
                    Order Now ....!
                  </h1>
                  <input
                    value={name}
                    className="input input-bordered w-full mt-5"
                    {...register("ProductName")}
                  />
                  <br />
                  <input
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
                    value={price}
                    className="input input-bordered my-4 w-full"
                    {...register("price")}
                  />
                  <br />
                  <input
                    placeholder="customer email"
                    value={user?.email}
                    className="input input-bordered my-4 w-full"
                    {...register("customerEmail")}
                  />
                  <br />

                  <input
                    required
                    placeholder="minimum Order"
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
                  <input
                    className="mt-4 btn btn-success w-full"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseProduct;
