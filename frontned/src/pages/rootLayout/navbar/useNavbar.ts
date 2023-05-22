import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../../../store/cart-slice";
import { IRootState } from "../../../store/store";

export const useNavbar = () => {
  const { cartState: crtState } = useSelector(
    (state: IRootState) => state.cart
  );
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(cartState());
  };
  return {
    cartHandler,
    crtState,
  };
};
