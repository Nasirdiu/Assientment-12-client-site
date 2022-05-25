import React from "react";
import { toast } from "react-toastify";

const UserAdmin = ({ user, refetch }) => {
  const { _id, email, role } = user;
  const MakeAdmin = () => {
    fetch(`https://mighty-island-92006.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          refetch();
          toast.success("successfully made an admin");
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Order Delete?");
    if (proceed) {
      const url = `https://mighty-island-92006.herokuapp.com/user/${id}`;
      // console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Delete Admin");
          }
        });
    }
  };

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={MakeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <p className="text-red-500">All Ready Admin</p>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-accent"
        >
          Remove Admin
        </button>
      </td>
    </tr>
  );
};

export default UserAdmin;
