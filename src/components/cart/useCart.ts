import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import {
  cartState,
  decreasetItem,
  increaseItem,
  purchase,
  removeItem,
} from "../../store/cart-slice";

export const useCart = () => {
  const { cartState: stateCart, cart } = useSelector(
    (state: IRootState) => state.cart
  );
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(cartState());
  };

  const removeItemHandler = (id: number) => {
    // console.log(id);
    dispatch(removeItem({ id }));
  };

  const increment = (id: number) => {
    dispatch(increaseItem({ id }));
  };

  const decrement = (id: number) => {
    dispatch(decreasetItem({ id }));
  };

  const checkOutHandler = () => {
    dispatch(purchase({ bln: true }));
  };
  const values = {
    stateCart,
    cart,
  };

  const handlers = {
    closeMenu,
    removeItemHandler,
    increment,
    decrement,
    checkOutHandler,
  };
  return {
    values,
    handlers,
  };
};
