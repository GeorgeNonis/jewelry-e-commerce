import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import styles from "../styles/styles.module.scss";

const Country = () => {
  const [country, setCountry] = useState("");
  return (
    <div className={styles.countrydiv}>
      <CountryDropdown
        value={country}
        onChange={(e) => {
          console.log({ e });
          setCountry(e);
        }}
      />
      <h4 className={styles.countryname}>Country *</h4>
    </div>
  );
};
export default Country;
