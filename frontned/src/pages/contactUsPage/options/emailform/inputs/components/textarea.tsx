import { useTextarea } from "../../useTextarea";
import styles from "../styles/styles.module.scss";

const TextArea = () => {
  const { setValue, values } = useTextarea();
  return (
    <div>
      <textarea
        className={styles.textarea}
        name="msg"
        id="msg"
        placeholder="Message"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        maxLength={values.limit}
      ></textarea>
      <h4 className={styles.limit}>
        {values.limit - values.value.length} characters remaining
      </h4>
    </div>
  );
};
export default TextArea;
