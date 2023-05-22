import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCategories } from "../../config";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart-slice";

export const useProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const testing = allCategories.find((category) => {
    return category.items.find((item) => `${item.id}` === id);
  });
  const product = testing?.items.find((produ) => `${produ.id}` === id);

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  const additemtocart = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addItem({ id, quantity, item: { ...product } }));
      setLoading(false);
    }, 250);
  };

  const increment = () => {
    setQuantity((prev) => (prev += 1));
  };
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => (prev -= 1));
  };

  const values = {
    product,
    quantity,
    loading,
  };

  const handlers = {
    increment,
    decrement,
    additemtocart,
  };
  return {
    values,
    handlers,
  };
};
