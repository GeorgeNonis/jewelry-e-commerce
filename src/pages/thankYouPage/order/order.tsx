import { formatPriceToEuro } from "../../../config";
import styles from "./styles.module.scss";
import { useOrder } from "./useOrder";

const Order = () => {
  const { values } = useOrder();
  return (
    <div className={styles.orderdiv}>
      <div className={styles.ordermeta}>
        <div className={styles.ordermetadiv}>
          {values.orderMeta.map((data, i) => {
            return (
              <div key={i} className={styles.datadiv}>
                <h3 className={styles.dataname}>{data.name}</h3>
                <span className={styles.datainfo}>{data.data}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.orderdetails}>
          <h1 className={styles.orderdetailstitle}>ORDER DETAILS</h1>
          <div className={styles.orderschema}>
            <h3>PRODUCT</h3>
            <h3>TOTAL</h3>
          </div>
          {values.order.map((order, i) => {
            return (
              <div key={i} className={styles.order}>
                <h3>
                  {order.name} x {order.quantity}
                </h3>{" "}
                <h3>{formatPriceToEuro(order.price)}</h3>
              </div>
            );
          })}
          <div className={styles.shipping}>
            <h3>Shipping</h3>
            <h3>Free Shipping</h3>
          </div>
          <div className={styles.total}>
            <h1>TOTAL</h1>
            <h1>{formatPriceToEuro(values.cart.sum)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
