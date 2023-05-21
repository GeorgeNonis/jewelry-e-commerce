import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NoPageFound = () => {
  return (
    <main className={styles.main}>
      <h3>Requested page does not exist!</h3>

      <h3>Head back</h3>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </main>
  );
};
export default NoPageFound;
