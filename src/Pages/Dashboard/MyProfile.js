import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { id } = useParams();
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
            facebook: data.facebook,
            age: data.age,
            linkedin: data.linkedin,
            img: img,
          };
          //send to your database:
          fetch(`https://mighty-island-92006.herokuapp.com/userprofile/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              toast(" added successfully");
              reset();
            });
        }
      });
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center text-secondary font-bold ">
        Profile Add
      </h1>
      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Profile Name</span>
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
            <span className="label-text">Facebook Url</span>
          </label>
          <input
            type="text"
            placeholder="Your Facebook"
            className="input input-bordered w-full max-w-xs"
            {...register("facebook", {
              required: {
                value: true,
                message: "Name is Required",
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
            <span className="label-text">Linkedin Url</span>
          </label>
          <input
            type="text"
            placeholder="Your linkedin"
            className="input input-bordered w-full max-w-xs"
            {...register("linkedin", {
              required: {
                value: true,
                message: "Name is Required",
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
