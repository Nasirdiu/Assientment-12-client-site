import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfile = () => {
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
    console.log(url);
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
            facebook: data.facebook,
            linkedin: data.linkedin,
            phone: data.phone,
            age: data.age,
            img: img,
          };

          //send to your database:
          fetch("http://localhost:5000/uploadProfile", {
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
    <div className="mt-10 bg-gray-300">
      <h1 className="text-2xl text-center text-secondary font-bold ">
        {" "}
        Add Profile
      </h1>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
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
            <span className="label-text">Facebook Profile Url</span>
          </label>
          <input
            type="text"
            placeholder="Your Profile Url Facebook"
            className="input input-bordered w-full max-w-xs"
            {...register("facebook", {
              required: {
                value: true,
                message: "facebook is Required",
              },
            })}
          />
          <label className="label">
            {errors.facebook?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.facebook.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Linkedin Profile Url</span>
          </label>
          <input
            type="text"
            placeholder="Your Profile Url Linkedin"
            className="input input-bordered w-full max-w-xs"
            {...register("linkedin", {
              required: {
                value: true,
                message: "linkedin is Required",
              },
            })}
          />
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", {
              required: {
                value: true,
                message: "phone is Required",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            placeholder="Your Age"
            className="input input-bordered w-full max-w-xs"
            {...register("age", {
              required: {
                value: true,
                message: "age is Required",
              },
            })}
          />
          <label className="label">
            {errors.age?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.age.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
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
          className="btn w-full max-w-xs text-white btn-accent"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default MyProfile;
