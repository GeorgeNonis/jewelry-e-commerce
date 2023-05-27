import { Country, FormInputs } from "../../options/index";
import TextArea from "./inputs/components/textarea";
import styles from "./styles.module.scss";
import { useEmailform } from "./useEmailform";

const Emailform = () => {
  const { onChangeHandler, onSumbitHandler, data } = useEmailform();
  return (
    <form className={styles.mainContent} onSubmit={onSumbitHandler}>
      <h3>
        If you have a question or require further information, then please feel
        free to contact us using the form below. We would be happy to help.
      </h3>
      <div className={styles.checkBoxes}>
        <div className={styles.checkbox1}>
          <input
            type="radio"
            value={"mr"}
            checked={data.mr === "mr"}
            name="mr"
            onChange={onChangeHandler}
          />
          <label htmlFor="mr">Mr.</label>
        </div>
        <div className={styles.checkbox2}>
          <input
            type="radio"
            value={"ms"}
            name="ms"
            checked={data.ms === "ms"}
            onChange={onChangeHandler}
          />
          <label htmlFor="mr">Ms.</label>
        </div>
      </div>
      <FormInputs />
      <Country />
      <TextArea />
      <button className={styles.sumbitform} role="sumbit">
        Sumbit
      </button>
    </form>
  );
};
export default Emailform;
