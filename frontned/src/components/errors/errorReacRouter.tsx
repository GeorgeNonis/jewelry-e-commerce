import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Error = () => {
  return (
    <div className={styles.content}>
      <h2>Something went wrong</h2>
      <h3>
        We apologize for any inconvenience this may caused and we appreciate
        your understanding
      </h3>

      <Link to={"/"}>Head back to the main page</Link>
    </div>
  );
};
export default Error;
