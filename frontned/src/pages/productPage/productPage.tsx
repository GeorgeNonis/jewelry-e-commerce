import { formatPriceToEuro } from "../../config";
import { useProductPage } from "./useProductPage";
import { LoadingSpinner, TrendingNow } from "../../components";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { values, handlers } = useProductPage();

  return (
    <>
      <section className={styles.sectionContent}>
        <img src={values.product?.img} alt={values.product?.img} />
        <div className={styles.mainContent}>
          <h3>{values.product?.name}</h3>
          <p>{values.product?.description}</p>
          <div className={styles.quantity}>
            <h3>Quantity</h3>
            <div className={styles.incrementBtn}>
              <span className={styles.minus} onClick={handlers.decrement}>
                -
              </span>
              <span className={styles.poso}>{values.quantity}</span>
              <span className={styles.plus} onClick={handlers.increment}>
                +
              </span>
            </div>
            <span>
              {formatPriceToEuro(values.quantity * values.product!.price ?? 0)}
            </span>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.addCart}
              onClick={handlers.additemtocart}
              disabled={values.loading}
            >
              {values.loading ? (
                <LoadingSpinner height={true} />
              ) : (
                "ADD TO CART"
              )}
            </button>
            <Link
              className={styles.buyNow}
              to={"/checkout"}
              onClick={handlers.checkOutHandler}
            >
              BUY NOW
            </Link>
            {/* <button className={styles.buyNow} onClick={handlers.checkOutHandler}>BUY NOW</button> */}
          </div>
        </div>
        <div className={styles.productstats}>
          <div>
            <h3>Texture:</h3>
            <span>{values.product?.texture}</span>
          </div>
          <div>
            <h3>Weight:</h3>
            <span>{values.product?.weight}</span>
          </div>
          <div>
            <h3>Dimensions:</h3>
            <span>{values.product?.dimensions}</span>
          </div>
        </div>
      </section>
      <TrendingNow />
    </>
  );
};
export default ProductPage;
