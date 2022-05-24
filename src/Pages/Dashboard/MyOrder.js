import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setOrder(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Order Delete?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = order.filter((order) => order._id !== id);
            setOrder(remaining);
            toast("Order Delete");
          }
        });
    }
  };
  return (
    <div className="mt-5">
      <h1 className="text-center text-secondary uppercase mt-5 mb-5 text-2xl">
        My Order:{order.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {order.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.customer}</td>
                <td>{a.ProductName}</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
                <button
                  onClick={() => handleDelete(a._id)}
                  className="btn btn-accent"
                >
                  Delete
                </button>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-accent">Payment</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        {" "}
                        <span className="text-red-500">Payment Complete</span>
                      </p>
                      <p>
                        Transaction Id:
                        <span className="text-success">{a.ProductId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
