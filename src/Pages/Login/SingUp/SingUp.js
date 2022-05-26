import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loadding/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const SingUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //email sing in
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //google sing in
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser);
  const navigate = useNavigate();
  let singInError;
  //loading
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  //error
  if (error || gError || updateError) {
    singInError = (
      <p className="text-red-700">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  //user
  if (token) {
    navigate("/home");
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast("Sing Up done");
  };
  return (
    <div className=" bg-slate-700 flex justify-center items-center h-screen	">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sing Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 carater longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {singInError}
            <input
              className="btn w-full max-w-xs text-secondary btn-accent"
              type="submit"
              value="Sing Up "
            />
          </form>
          <p>
            <small>
              Already Have Account?
              <Link to="/login" className="text-secondary">
                Please Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-warning"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
