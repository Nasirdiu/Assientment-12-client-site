import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, ProductName, customerEmail, customer } = order;
  useEffect(() => {
    fetch("https://mighty-island-92006.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    //confirm card payment
    const { paymentIntent, error: intent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: customerEmail,
          },
        },
      }
    );
    if (intent) {
      setCardError(error?.message);
      setProcessing(false);
    } else {
      setCardError("");
      // console.log(paymentIntent);
      setTransaction(paymentIntent.id);
      setSuccess("Congratulations!your payment is complete");
    }
    //updated
    const payment = {
      order: _id,
      transactionId: paymentIntent.id,
    };
    fetch(`https://mighty-island-92006.herokuapp.com/order/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        setProcessing(false);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-10 m-10 uppercase font-bold p-2 w-16 ml-20  text-center"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transaction Id :{" "}
            <span className="bg-orange-100 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
