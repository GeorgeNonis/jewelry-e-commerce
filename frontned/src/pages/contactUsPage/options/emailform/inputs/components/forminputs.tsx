import { FormData } from "../interfaces";
import Phone from "./phoneinput";
import { useFormInputs } from "../useFormInputs";
import { formInputs } from "../../../../../../config";
import styles from "../styles/styles.module.scss";

const FormInputs = () => {
  const { handlers, values } = useFormInputs();
  return (
    <div className={styles.formdiv}>
      {formInputs.map((input, i) => {
        return (
          <div className={styles.inputdiv} key={i}>
            <input
              className={styles.input}
              type={input.type}
              name={input.value}
              onChange={handlers.onChangeHandler}
              value={values.data[input.value as keyof FormData]}
              required={true}
            />
            <h4 className={styles.inputname}>{input.name} *</h4>
          </div>
        );
      })}
      <Phone />
    </div>
  );
};
export default FormInputs;
