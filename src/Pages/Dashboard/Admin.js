import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loadding/Loading";
import UserAdmin from "./UserAdmin";

const Admin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users", []], () =>
    fetch(`https://mighty-island-92006.herokuapp.com/user`, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-center text-secondary mt-5">
        All Users:{users?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserAdmin
                refetch={refetch}
                key={user._id}
                user={user}
              ></UserAdmin>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
