import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loadding/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigated = useNavigate();
  const [user] = useAuthState(auth);
  // console.log(user.email);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/userprofile/${user.email}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  

  const editProfile = (id) => {
    navigated(`/myProfile/${id}`);
  };
  return (
    <div>
      <div className="w-1/2 mx-auto mt-4 bg-gray-500 p-4 rounded-lg">
        <div className="text-center text-white">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={users.img} alt="" />
            </div>
          </div>
          <h1>user id: {users?._id}</h1>
          <h1>user email: {user?.email}</h1>
          <h1>user Name: {users?.name}</h1>
          <h1>user age: {users?.age}</h1>
          <h1>Facebook Url: {users?.facebook}</h1>
          <h1>Linkedin Url: {users?.linkedin}</h1>
        </div>
        <div className="text-center">
          <button
            onClick={() => editProfile(users?._id)}
            className="mt-4 btn btn-success px-10 mx-auto"
          >
            Edit more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
