import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { useContactUsPageObj } from "./interfaces";
import { contactOptions } from "../../../config";
import ContactAction from "./contactComps/contactaction";
import { useContactOptions } from "./useContactOptions";
import Emailform from "./emailform";
import styles from "../styles.module.scss";

const ContactOptions = ({ ...rest }: useContactUsPageObj) => {
  const { ...values } = useContactOptions();
  const options = {
    email: {
      icon: <TfiEmail />,
      btn: "Send an email",
      action: "Email",
      time: "1- 3 business days",
    },
    telephone: {
      icon: <BsTelephoneOutbound />,
      btn: "Call us",
      action: "Phone",
      time: "2-5 minutes",
    },
  };
  return (
    <div>
      <div className={styles.topicdiv}>
        <span>3</span>
        <h2>Contact Options</h2>
      </div>
      {rest.subject && (
        <>
          <div className={styles.topicinput}>
            <h3 className={styles.contactitle}>
              Choose your preferred contact option
            </h3>
            <div className={styles.contactoptions}>
              <ContactAction {...options.email} handler={values.emailHandler} />
              <div
                className={styles.emailinfo}
                ref={values.refEmail}
                style={
                  values.cart.emailInfo
                    ? { height: values.hightEmail }
                    : undefined
                }
              >
                <Emailform />
              </div>
              <ContactAction
                {...options.telephone}
                handler={values.callHandler}
              />
            </div>
            <div
              className={styles.contactinfo}
              ref={values.ref}
              style={values.callinfo ? { height: values.hight } : undefined}
            >
              <div className={styles.customerLoc}>
                <h3>Customer service Denmark</h3>
                {contactOptions.locationCustomer.map((l) => {
                  return <h3 key={l}>{l}</h3>;
                })}
              </div>

              <h3>{contactOptions.hours}</h3>
              <div className={styles.phone}>
                <h1>Phone:</h1>
                <a href={`tel:${contactOptions.phone}`}>
                  {contactOptions.phone}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ContactOptions;
