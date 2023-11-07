import { Link } from "react-router-dom";
import { categories } from "../../../config";
import styles from "./styles.module.scss";

const Categories = () => {
  return (
    <main className={styles.mainContent}>
      {categories.map((img, i) => {
        return (
          <div
            key={i}
            className={styles.category}
            style={{ gridArea: `${img.gridArea}` }}
          >
            <img src={img.img} />
            <h3>{img.name}</h3>
            <Link to={`categories/${img.name}`}>
              <div className={styles.shadow}></div>
            </Link>
          </div>
        );
      })}
    </main>
  );
};
export default Categories;
