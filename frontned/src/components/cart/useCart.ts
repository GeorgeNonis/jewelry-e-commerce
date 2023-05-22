import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { cartState, removeItem } from "../../store/cart-slice";

export const useCart = () => {
  const { cartState: state, cart } = useSelector(
    (state: IRootState) => state.cart
  );
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(cartState());
  };

  const removeItemHandler = (id: number) => {
    console.log(id);
    dispatch(removeItem({ id }));
  };

  const values = {
    state,
    cart,
  };

  const handlers = {
    closeMenu,
    removeItemHandler,
  };
  return {
    values,
    handlers,
  };
};
