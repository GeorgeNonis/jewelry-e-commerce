import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../styles/phone-input.css";

const Phone = () => {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={(e) => {
        console.log({ e });
        setValue(e);
      }}
    />
  );
};
export default Phone;
