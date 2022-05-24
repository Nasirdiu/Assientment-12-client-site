import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loadding/Loading";

const AllOrder = () => {
  const url = `http://localhost:5000/orders/`;
  const { data: order, isLoading } = useQuery(["order"], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );
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
              <th>Price</th>
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
                <td>{a.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
