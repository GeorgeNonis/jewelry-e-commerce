import { useParams } from "react-router-dom";
import { allCategories, formatPriceToEuro } from "../../config";
import { useProductPage } from "./useProductPage";
import { TrendingNow } from "../../components";
import styles from "./styles.module.scss";
// import { useEffect } from "react";
// import { ProductsProudSection } from "../../components";

const ProductPage = () => {
  const { quantity, decrement, increment } = useProductPage();
  const { id } = useParams();
  const testing = allCategories.find((category) => {
    return category.items.find((item) => `${item.id}` === id);
  });
  const product = testing?.items.find((produ) => `${produ.id}` === id);

  return (
    <>
      <section className={styles.sectionContent}>
        <img src={product?.img} alt={product?.img} />
        <div className={styles.mainContent}>
          <h3>{product?.name}</h3>
          <p>{product?.description}</p>
          <div className={styles.quantity}>
            <h3>Quantity</h3>
            <div className={styles.incrementBtn}>
              <span className={styles.minus} onClick={decrement}>
                -
              </span>
              <span className={styles.poso}>{quantity}</span>
              <span className={styles.plus} onClick={increment}>
                +
              </span>
            </div>
            <span>{formatPriceToEuro(product?.price ?? 0)}</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.addCart}>ADD TO CART</button>
            <button className={styles.buyNow}>BUY NOW</button>
          </div>
        </div>
        <div className={styles.productstats}>
          <div>
            <h3>Texture:</h3>
            <span>{product?.texture}</span>
          </div>
          <div>
            <h3>Weight:</h3>
            <span>{product?.weight}</span>
          </div>
          <div>
            <h3>Dimensions:</h3>
            <span>{product?.dimensions}</span>
          </div>
        </div>
      </section>
      <TrendingNow />
    </>
  );
};
export default ProductPage;
