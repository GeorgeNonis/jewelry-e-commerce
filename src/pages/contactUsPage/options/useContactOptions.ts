import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { openEmailInfo } from "../../../store/cart-slice";

export const useContactOptions = () => {
  const dispatch = useDispatch();
  const { ...cart } = useSelector((state: IRootState) => state.cart);
  const [callinfo, setCallinfo] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const hight = ref.current?.scrollHeight;
  const refEmail = useRef<HTMLDivElement>(null);
  const hightEmail = refEmail.current?.scrollHeight;
  const callHandler = () => {
    setCallinfo(!callinfo);
  };
  const emailHandler = () => {
    dispatch(openEmailInfo());
  };

  const values = {
    ref,
    callinfo,
    hight,
    refEmail,
    hightEmail,
    cart,
  };

  const handlers = {
    callHandler,
    emailHandler,
  };
  return {
    ...handlers,
    ...values,
  };
};
