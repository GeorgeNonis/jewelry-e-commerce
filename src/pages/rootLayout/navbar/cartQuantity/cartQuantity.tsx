import { BsFillCartFill } from "react-icons/bs";
import styles from "../styles.module.scss";
import { CartQuantityProps } from "./interfaces";

const CartQuantity = ({ cartHandler, cartQuantity }: CartQuantityProps) => {
  return (
    <div className={styles.cartQuantity} onClick={cartHandler}>
      <span className={styles.cartSpan}>{cartQuantity}</span>
      <BsFillCartFill />
    </div>
  );
};
export default CartQuantity;
