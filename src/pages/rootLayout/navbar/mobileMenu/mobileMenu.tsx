import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { allCategories } from "../../../../config";
import styles from "./styles.module.scss";

const MobileMenu = ({
  handler,
  crt,
}: {
  handler: () => void;
  crt: boolean;
}) => {
  const itemsLength = allCategories[4].items.length;
  // console.log({ crt });
  return (
    <div className={`${styles.mobilemenu} ${crt ? styles.show : styles.hide}`}>
      <HiXMark className={styles.xMark} onClick={handler} />
      <Link to={"/categories/All"} onClick={handler}>
        <h3>Categories</h3>
      </Link>
      <Link
        onClick={handler}
        to={`/categories/product/${
          allCategories[4].items[Math.floor(Math.random() * itemsLength)].id
        }`}
      >
        <h3>Products Page</h3>
      </Link>
    </div>
  );
};
export default MobileMenu;
