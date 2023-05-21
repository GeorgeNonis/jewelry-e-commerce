import { useRef, useState } from "react";
import { FAQProps } from "../interfaces";
import styles from "../styles.module.scss";

const FAQuestion = ({ a, q, isOpen, handler, i }: FAQProps) => {
  const [state, setState] = useState(false);
  const aRef = useRef<HTMLDivElement>(null);
  const height = aRef.current?.scrollHeight;
  const stateHandler = () => {
    handler(i);
    setState(!state);
  };
  //   console.log({ isOpen });
  //   console.log(aRef.current?.scrollHeight);
  return (
    <div className={styles.faqDiv} onClick={stateHandler}>
      <div className={styles.faqQuestion}>
        <h3>{q}</h3>
        <button>{isOpen && state ? "-" : "+"}</button>
      </div>
      <div
        className={styles.answer}
        style={
          isOpen && state
            ? { height: height, marginBlock: "3rem" }
            : { height: 0 }
        }
        ref={aRef}
      >
        <p>{a}</p>
      </div>
    </div>
  );
};
export default FAQuestion;
