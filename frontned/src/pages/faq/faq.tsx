import { faq } from "../../config";
import { useFaq } from "./useFaq";
import FAQuestion from "./question/faquestion";
import styles from "./styles.module.scss";

const FaqPage = () => {
  const { handleQuestionClick, openIndex } = useFaq();
  return (
    <section className={styles.faqpage}>
      <img
        src="https://cdn.discordapp.com/attachments/1056419450473152533/1108715091609784390/Neilyo77_Please_generate_a_description_for_an_image_showcasing__32d3d23b-d0f0-4ff4-9767-5811bdc181fa.png"
        alt="faq_picture"
      />
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
