import { useDispatch, useSelector } from "react-redux";
import { cartState, burgerState } from "../../../store/cart-slice";
import { IRootState } from "../../../store/store";

export const useNavbar = () => {
  const { burgerMenu, cart } = useSelector((state: IRootState) => state.cart);
  const dispatch = useDispatch();

  const burgerHandler = () => {
    dispatch(burgerState());
  };

  const cartHandler = () => {
    dispatch(cartState());
  };
  return {
    burgerHandler,
    burgerMenu,
    cartHandler,
    cart,
  };
};
