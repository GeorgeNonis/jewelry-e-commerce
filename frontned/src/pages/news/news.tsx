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
      <img src="/otherSenctions/news.png" alt="" />
      {/* <div className={styles["news-section"]}>
        <img src="/otherSenctions/modelonthrone.png" alt="Middle Image" />

        <img src="/otherSenctions/model1.png" alt="Overlay Image 1" />
        <img src="/otherSenctions/model2.png" alt="Overlay Image 2" />
        <img src="/otherSenctions/models.png" alt="Overlay Image 3" />
        <img src="/otherSenctions/modelsfemales.png" alt="Overlay Image 4" />
      </div> */}
    </section>
  );
};
export default NewsPage;
