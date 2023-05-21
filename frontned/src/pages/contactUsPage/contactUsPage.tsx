import { TopicOptions, SubjectOptions, ContactOptions } from "./options";
import { useContactUsPage } from "./useContactUsPage";
import styles from "./styles.module.scss";

const ContactUsPage = () => {
  const rest = useContactUsPage();

  return (
    <section className={styles.contactUsPage}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.contactusdiv}>
        <TopicOptions {...rest} />
      </div>
      <div className={styles.contactusdiv}>
        <SubjectOptions {...rest} />
      </div>
      <div className={styles.contactusdiv}>
        <ContactOptions {...rest} />
      </div>
    </section>
  );
};
export default ContactUsPage;
