import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cart-slice";
import { IRootState } from "../../store/store";

export const useThankyou = () => {
  const [loading, setLoading] = useState(true);
  const { invoiceState } = useSelector((state: IRootState) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = location.pathname.split("/")[2];
    console.log(url);
    if (url === "order-received") {
      !invoiceState && navigate("/");
    }
    setLoading(false);
  }, [location]);

  const gohomehandler = () => {
    dispatch(clearCart());
  };

  return {
    gohomehandler,
    loading,
  };
};
