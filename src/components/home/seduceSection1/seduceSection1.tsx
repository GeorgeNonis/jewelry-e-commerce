import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const SeduceSection1 = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.quote}>
        <h3>Summer Vibes.</h3>
        <p>
          Embrace creative harmonious living as you express your unique style
          and capture the essence of the sun-kissed season.
        </p>
        <Link to={"categories/All"}>
          <button>SHOP NOW</button>
        </Link>
      </div>
      <img
        src={
          "https://cdn.discordapp.com/attachments/1056419450473152533/1107614870091878400/Neilyo77_I_would_like_Midjourney_AI_to_generate_an_image_of_a_j_a6f6470c-bed3-427d-babe-fd518735cc7e.png"
        }
        alt="summer_picture"
      />
    </section>
  );
};
export default SeduceSection1;
