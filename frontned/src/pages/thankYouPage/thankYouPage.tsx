import { Link } from "react-router-dom";
import TrackingComponent from "./tracking";
import styles from "./styles.module.scss";
import Order from "./order";

const ThankYouPage = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.title}>Thank You for Your Purchase!</h1>
          <p className={styles.message}>
            We appreciate your business and hope you enjoy your purchase. If you
            have any questions or need further assistance, please don't hesitate
            to contact us.
          </p>
          <Link to={"/"}>
            <button className={styles.button}>Go to Homepage</button>
          </Link>
        </div>
        <TrackingComponent />
        <Order />
      </div>
    </>
  );
};

export default ThankYouPage;
