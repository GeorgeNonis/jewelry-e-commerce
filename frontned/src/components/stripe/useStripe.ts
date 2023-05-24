import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartState, clearCart } from "../../store/cart-slice";

export const useStripHook = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [complete, setComplete] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    // Simulate a successful payment
    // setPaymentSuccess(true);
  };

  // Redirect to the homepage after successful payment
  if (complete) {
    dispatch(cartState());
    navigate("/checkout/order-received");
    // dispatch(clearCart());
  }

  const values = {
    firstName,
    email,
    location,
    paymentSuccess,
  };

  const handlers = {
    setFirstName,
    setEmail,
    setLocation,
    setComplete,
    handleSubmit,
  };

  return {
    values,
    handlers,
  };
};
