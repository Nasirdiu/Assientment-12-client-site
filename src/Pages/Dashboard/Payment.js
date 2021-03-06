import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loadding/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0UWTIFNwI8PxtxqK1troSfsMkqlSkRWpFg47K0LVQHohdVYVcYpu5X6gLZu0tMYwdl6L2dyBidAPcR2BVff6rr00s3uc8AQ2"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://mighty-island-92006.herokuapp.com/order/${id}`;
  // console.log(url);
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-slate-700 ml-20">
      <div className="card max-w-md bg-white shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title text-secondary">Hello !{order.customer}</h2>
          <p className="text-2xl text-red-500">
            Please Pay For:{order.ProductName}
          </p>
          <p className="text-red-500"> Phone:{order.phone}</p>
          <p className="text-red-500">Please Pay:${order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body"></div>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
