import styles from "./styles.module.scss";

const NewsPage = () => {
  return (
    <section className={styles.newsSection}>
      <h1>News</h1>
      <p>
        We are excited to announce that exciting updates are on the horizon! Our
        dedicated team has been working tirelessly to enhance your experience
        and bring you new features that will revolutionize how you engage with
        our platform. From improved user interfaces to advanced functionality,
        these updates will take your interaction to the next level. Stay tuned
        as we unveil these exciting changes in the coming weeks, and get ready
        to embark on a journey of innovation and seamless user experience!
      </p>
      <img
        src="https://cdn.discordapp.com/attachments/1056419450473152533/1109414200226353153/Neilyo77_Create_an_image_for_the_News_section_of_our_jewelry_we_6d095b1c-d2db-4bd3-b556-062a57f147af.png"
        alt=""
      />
    </section>
  );
};
export default NewsPage;
