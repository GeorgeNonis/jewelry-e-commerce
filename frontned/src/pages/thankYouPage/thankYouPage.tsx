import { Link } from "react-router-dom";
import TrackingComponent from "./tracking";
import styles from "./styles.module.scss";
import Order from "./order";
import { useThankyou } from "./useThankyou";
import { LoadingSpinner } from "../../components";

const ThankYouPage = () => {
  const { gohomehandler, loading } = useThankyou();
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.mainContent}>
          <div className={styles.container}>
            <h1 className={styles.title}>Thank You for Your Purchase!</h1>
            <p className={styles.message}>
              We appreciate your business and hope you enjoy your purchase. If
              you have any questions or need further assistance, please don't
              hesitate to contact us.
            </p>
            <Link to={"/"} onClick={gohomehandler}>
              <button className={styles.button}>Go to Homepage</button>
            </Link>
          </div>
          <TrackingComponent />
          <Order />
        </div>
      )}
    </>
  );
};

export default ThankYouPage;
