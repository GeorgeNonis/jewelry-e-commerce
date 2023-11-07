import { ContactActionProps } from "../interfaces";
import styles from "./styles.module.scss";

const ContactAction = ({
  icon,
  action,
  time,
  btn,
  handler,
}: ContactActionProps) => {
  return (
    <div className={styles.contactactiondiv}>
      {icon}
      <div className={styles.estimateddiv}>
        <h2>{action}</h2>
        <h3>Estimated waiting time:{time}</h3>
      </div>
      <button className={styles.btn} onClick={handler}>
        {btn}
      </button>
    </div>
  );
};
export default ContactAction;
