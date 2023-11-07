import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";

export const useOrder = () => {
  const { cart } = useSelector((state: IRootState) => state.cart);
  const orderId = Math.floor(Math.random() * 100 + 1);

  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;

  const orderMeta = [
    {
      name: "Order Number:",
      data: orderId,
    },
    {
      name: "Date:",
      data: currentDate,
    },
    {
      name: "Total:",
      data: cart.sum,
    },
    {
      name: "Payment Method:",
      data: "Card",
    },
  ];

  const order = cart.items.map((item) => {
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.total,
    };
  });

  const values = {
    orderId,
    currentDate,
    cart,
    orderMeta,
    order,
  };

  return {
    values,
  };
};
