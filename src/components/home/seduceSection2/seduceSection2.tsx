import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const SeduceSection2 = () => {
  return (
    <section className={styles.mainContent}>
      <img
        src={
          "https://cdn.discordapp.com/attachments/1056419450473152533/1107628097215397888/Neilyo77_I_would_like_an_image_of_jewelry_with_a_luxurious_feel_8679ab7b-e37b-48e2-b269-4ed2973da5be.png"
        }
        alt="summer_picture"
      />
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
