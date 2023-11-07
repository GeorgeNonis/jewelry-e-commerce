import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../config";
import styles from "./styles.module.scss";
import { useEffect } from "react";

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.split("/")[2].replace("%20", " ") ?? "";
  useEffect(() => {
    category === "" && navigate("All");
  }, [location, category, navigate]);
  return (
    <section className={styles.sectionContent}>
      <div className={styles.titlediv}>
        <Link to={"/"}>
          <AiOutlineArrowLeft />
          Home
        </Link>
        <h3 className={styles.title}>{category}</h3>
      </div>
      <div className={styles.categoriesLink}>
        <Link to={"All"}>All</Link>
        {categories.map((c, i) => (
          <Link to={c.name} key={i}>
            {c.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </section>
  );
};
export default CategoriesPage;
