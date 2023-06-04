import { FormData, FormProps } from "../interfaces";
import Phone from "./phoneinput";
import { formInputs } from "../../../../../../config";
import styles from "../styles/styles.module.scss";
// import { useEmailform } from "../../useEmailform";

const FormInputs = ({ values, handlers }: FormProps) => {
  return (
    <div className={styles.formdiv}>
      {formInputs.map((input, i) => {
        return (
          <div className={styles.inputdiv} key={i}>
            <input
              className={styles.input}
              type={input.type}
              name={input.value}
              onChange={handlers.onChangeFormHandler}
              value={values.formdata[input.value as keyof FormData]}
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
