import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { invoice } from "../../store/cart-slice";
import { IRootState } from "../../store/store";

export const useStripHook = () => {
  const { purchaseState } = useSelector((state: IRootState) => state.cart);
  const navigate = useNavigate();
  const loc = useLocation();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [complete, setComplete] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  complete;
  useEffect(() => {
    const checkoutUrl = loc.pathname.split("/")[1];
    if (checkoutUrl === "checkout") {
      !purchaseState && navigate("/");
    }
  }, [loc, purchaseState, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    dispatch(invoice());
    navigate("/checkout/order-received");
  };

  const values = {
    firstName,
    email,
    location,
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
