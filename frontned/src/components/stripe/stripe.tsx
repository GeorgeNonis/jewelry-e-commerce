import { CardElement } from "@stripe/react-stripe-js";
import styles from "./styles.module.scss";
import { useStripHook } from "./useStripe";

const DummyStripeForm = () => {
  const { handlers, values } = useStripHook();

  return (
    <div className={styles["dummy-stripe-form"]}>
      <h1>Dummy Stripe Form</h1>
      <form onSubmit={handlers.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={values.firstName}
            onChange={(e) => handlers.setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={(e) => handlers.setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={values.location}
            onChange={(e) => handlers.setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardDetails">Card details:</label>
          <CardElement
            id="cardDetails"
            className={styles["StripeElement"]}
            options={{ style: { base: { fontSize: "16px" } } }}
            onChange={(e) => handlers.setComplete(e.complete)}
          />
        </div>
        {values.paymentSuccess && (
          <div className={styles["success-message"]}>Payment successful!</div>
        )}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default DummyStripeForm;
