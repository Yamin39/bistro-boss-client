import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const { user } = useAuth();
  const navigate = useNavigate();
  const elements = useElements();
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  console.log(totalPrice);

  useEffect(() => {
    // if we make post request for below 0.5 usd the server will crash
    if (totalPrice >= 0.5) {
      axiosSecure.post("/create-payment-intent", { price: totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cart.length) {
      return toast.error("Yor Cart is empty");
    }

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      toast.error(error.message);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.log("Confirm Error", confirmError);
    } else {
      console.log("Payment Intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        toast.success(`Payment success! Transaction Id: ${paymentIntent.id}`);
        console.log("Transaction Id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // use moment js to convert utc date
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saved", res.data);
        refetch();

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank you for the taka poisa",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        navigate("/dashboard/payment-history");
      }
    }
  };

  return (
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
      <button className="btn btn-accent mt-6" type="submit" disabled={!stripe || !clientSecret || !cart.length}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p>}
      <Toaster></Toaster>
    </form>
  );
};

export default CheckoutForm;
