import { useState } from "react";

export const useProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev += 1));
  };
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => (prev -= 1));
  };
  return {
    quantity,
    increment,
    decrement,
  };
};
