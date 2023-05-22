import { HiXMark } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { useCart } from "./useCart";
import { formatPriceToEuro } from "../../config";

const Cart = () => {
  const { handlers, values } = useCart();
  return (
    <div
      className={`${styles.shopcart} ${
        values.state ? styles.show : styles.hide
      }`}
    >
      <div className={styles.backdrop} onClick={handlers.closeMenu}></div>
      <div className={styles.cart}>
        <HiXMark className={styles.xMark} onClick={handlers.closeMenu} />
        <h1 className={styles.shopcarttitle}>
          Your Shopping Cart({values.cart.quantity})
        </h1>
        {values.cart.quantity == 0 && (
          <div className={styles.keepbrowsing}>
            <img
              className={styles.emptycartimg}
              src={"/public/otherSenctions/emptycart.png"}
              alt="empty_cart"
            />
            <button
              onClick={handlers.closeMenu}
              className={styles.keepbrowsingbtn}
            >
              Keep Browsing
            </button>
          </div>
        )}
        {values.cart.quantity !== 0 && (
          <>
            <div className={styles.items}>
              {values.cart.items.map((item, i) => {
                return (
                  <div className={styles.item} key={i}>
                    <div className={styles.itemimgdiv}>
                      <img
                        src={item.img}
                        alt={item.img}
                        className={styles.itemimg}
                      />
                    </div>
                    <div className={styles.rest}>
                      <div className={styles.itemdetails}>
                        <h3 className={styles.itemtitle}>{item.name}</h3>
                        <span className={styles.itemprice}>
                          {formatPriceToEuro(item.total)}
                        </span>
                      </div>
                      <div className={styles.itemactions}>
                        <span
                          className={styles.minus}
                          // onClick={handlers.decrement}
                        >
                          -
                        </span>
                        <span className={styles.poso}>{item.quantity}</span>
                        <span
                          className={styles.plus}
                          // onClick={handlers.increment}
                        >
                          +
                        </span>
                      </div>
                      <HiXMark
                        className={styles.removeitem}
                        onClick={() => handlers.removeItemHandler(item.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.subtotal}>
              <div className={styles.sum}>
                <h1 className={styles.subtotaltitle}>Subtotal</h1>
                <span className={styles.subtotalprice}>
                  {formatPriceToEuro(values.cart.sum)}
                </span>
              </div>
              <button className={styles.checkoutbtn}>CHECKOUT</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
