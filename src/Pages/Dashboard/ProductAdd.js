import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductAdd = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "ff4a3bca6feff6db86f309b98922d201";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            email: data.email,
            description: data.description,
            price: data.price,
            minimum: data.minimum,
            available: data.available,
            img: img,
          };
          //send to your database:
          fetch("https://mighty-island-92006.herokuapp.com/uploadProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };

  return (
    <div className="mt-10  p-5">
      <h1 className="text-2xl text-center text-secondary font-bold ">
        Product Add
      </h1>
      <form className="ml-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <input
            type="text"
            placeholder="Your Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Price</span>
          </label>
          <input
            type="number"
            placeholder="Your Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Minimum Order</span>
          </label>
          <input
            type="number"
            placeholder="Your Minimum Order"
            className="input input-bordered w-full max-w-xs"
            {...register("minimum", {
              required: {
                value: true,
                message: "minimum is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimum?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.minimum.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Available Product</span>
          </label>
          <input
            type="number"
            placeholder="Your Available Product"
            className="input input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "available is Required",
              },
            })}
          />
          <label className="label">
            {errors.available?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.available.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white btn-secondary"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default ProductAdd;
