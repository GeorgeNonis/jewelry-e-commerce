import { faq } from "../../config";
import { useFaq } from "./useFaq";
import FAQuestion from "./question/faquestion";
import styles from "./styles.module.scss";

const FaqPage = () => {
  const { handleQuestionClick, openIndex } = useFaq();
  return (
    <section className={styles.faqpage}>
      <img src="/otherSenctions/faq.png" alt="faq_picture" />
      <h1>Most asked questions</h1>

      <div className={styles.faqSenction}>
        {faq.map((q, index) => {
          return (
            <FAQuestion
              key={index}
              {...q}
              isOpen={index === openIndex}
              handler={handleQuestionClick}
              i={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default FaqPage;
