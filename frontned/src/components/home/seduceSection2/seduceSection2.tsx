import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const SeduceSection2 = () => {
  return (
    <section className={styles.mainContent}>
      <img src={"/stones/stoneSeduce.png"} alt="summer_picture" />
      <div className={styles.quote}>
        <h3>Luxury & Elegant.</h3>
        <p>Timeless elegance, adorning your every moment.</p>
        <Link to={"categories/All"}>
          <button>SHOP NOW</button>
        </Link>
      </div>
    </section>
  );
};
export default SeduceSection2;
