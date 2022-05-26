import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loadding/Loading";

const AllOrder = () => {
  const url = `https://mighty-island-92006.herokuapp.com/orders/`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["order"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure Order Delete?");
    if (proceed) {
      const url = `https://mighty-island-92006.herokuapp.com/order/${id}`;
      // console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast("Order Delete");
        });
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-secondary uppercase mt-5 mb-5 text-2xl">
        All Order:{order.length}
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
              <th>Email</th>
              <th>Delete</th>
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
                <td>{a.customerEmail}</td>
                <button
                  disabled={a.paid}
                  onClick={() => handleDelete(a._id)}
                  className="btn btn-secondary"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
