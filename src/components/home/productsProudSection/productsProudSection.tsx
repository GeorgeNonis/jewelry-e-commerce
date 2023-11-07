import { Link } from "react-router-dom";
import { formatPriceToEuro, offers } from "../../../config";
import styles from "./styles.module.scss";

const ProductsProudSection = () => {
  return (
    <div className={styles.bestproductssection}>
      <h3 className={styles.bestproductstitle}>Best products</h3>
      <div className={styles.products}>
        {offers.map((img) => {
          return (
            <div className={styles.item} key={img.id}>
              <Link to={`/categories/product/${img.id}`}>
                <div className={styles.mask}></div>
              </Link>
              <img src={img.img} className={styles.itemimg} />
              <span className={styles.itemname}>{img.name}</span>
              <span className={styles.itemprice}>
                {formatPriceToEuro(img.price)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsProudSection;
