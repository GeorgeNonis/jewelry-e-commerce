import { Link } from "react-router-dom";
import { formatPriceToEuro } from "../../config";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "../../components";
import { useCategoryPage } from "./useCategoryPage";

const CategoryPage = () => {
  const { items, loading } = useCategoryPage();

  return (
    <section className={styles.sectionContent}>
      <div className={styles.products}>
        {/* <LoadingSpinner /> */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          items.map((item, i) => (
            <div className={styles.item} key={i}>
              <Link to={`/categories/product/${item.id}`}>
                <div className={styles.mask}></div>
              </Link>
              <img src={item.img} className={styles.itemimg} />
              <span className={styles.itemname}>{item.name}</span>
              <span className={styles.itemprice}>
                {formatPriceToEuro(item.price)}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
export default CategoryPage;
