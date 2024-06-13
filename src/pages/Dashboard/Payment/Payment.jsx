import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // NOTE: remove this validation if user have any need to go to payment page without having any items in cart
  if (!cart.length) {
    navigate(-1);
  }

  // add publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
