import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const AboutUsPage = () => {
  return (
    <section className={styles.aboutUsContent}>
      <div className={styles.introDiv}>
        <h1>About Nonis Jewelry's</h1>
      </div>
      <div className={styles.aboutUsDiv}>
        <h3>Our Story</h3>
        <p>
          Since 1895, founder Noni's Jewelry's mastery of crystal cutting has
          defined the company. His enduring passion for innovation and design
          has made it the world's premier jewelry and accessory brand. Today,
          the family carries on the tradition of delivering extraordinary
          everyday style to women around the world.
        </p>
      </div>
      <div className={styles.arxesDiv}>
        <h3>Craftmanship & Mastery</h3>
        <div className={styles.arxesInsideDiv}>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1056419450473152533/1108104437857259670/Neilyo77_Please_generate_an_image_of_a_blueprint_for_a_captivat_d036b489-b8fd-4d79-968a-565706211bf6.png"
              alt="creativity_image"
            />
            <h3>Creativity</h3>
            <p>
              From inspiration brief to collection launch, Noni's creative
              process is uniquely prolific. With a focus on trend curation,
              design, and meaningful branding, every piece tells a story and
              embodies over 125 years of mastered craftsmanship. The continuous
              evolution of material and technique makes Noni the leader of
              crystal cut creations.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1056419450473152533/1108105241523658844/Neilyo77_Please_generate_an_image_of_diamonds_beautifully_arran_2db1def5-462a-4089-bc36-ce2b775ac74b.png"
              alt="know_how_image"
            />
            <h3>Know-How</h3>
            <p>
              New cuts, shades, and sizes are conceived and realized every day
              in the historical Wattens headquarters, pushing the boundaries of
              crystal. Noni's know-how not only focuses on refining the crystal,
              it also explores methods that make the most incredible pieces
              possible. Beading, pavé, bezel, and prong settings are some of the
              techniques used to enhance the sparkle and create exquisite
              refinement.
            </p>
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1056419450473152533/1108103702599958548/Neilyo77_createa_professionalhight-resolution_image_of_a_wooden_40f2148b-85a0-40d0-9f3e-f3fe14b74f19.png"
              alt="quality_image"
            />

            <h3>Quality</h3>
            <p>
              Noni crystal settings come to life through our proprietary
              techniques such as Pointiage®, which lend an ultra-precise quality
              to work done by hand. Our attention to detail ensures that each
              and every piece will always be made of the highest quality. This
              expertise is infused in every step of the creative process, from
              initial design sketches through assembly.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.comeWondeRdiv}>
        <img
          src="https://cdn.discordapp.com/attachments/1056419450473152533/1108439963181269012/Neilyo77_Create_a_professional_high-resolution_image_of_a_jewel_61b6a646-df4d-4222-b70e-f59c1175ea98.png"
          alt="store_image"
        />
        <div>
          <h3>COME WONDER</h3>
          <h2>Discover our store</h2>
          <p>
            Explore our new stores. In 2021, Creative Director Giovanna
            Engelbert's vision comes to life in our new store concept, with an
            explosive approach to color, size and styling. Come wonder in our
            imaginary world, where science and magic meet.
          </p>

          <Link to={"/categories/All"}>
            <button className={styles.visitUsBtn}>Visit Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutUsPage;
