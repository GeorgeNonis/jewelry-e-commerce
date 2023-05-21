import { AiOutlineCheck } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { topicToSubjectMapping } from "../../../config";
import styles from "../styles.module.scss";
import { useContactUsPageObj } from "./interfaces";

const TopicOptions = ({ ...rest }: useContactUsPageObj) => {
  return (
    <div>
      <div className={styles.topicdiv}>
        <span style={rest.option ? { background: "black" } : undefined}>
          {rest.option ? <AiOutlineCheck className={styles.tickmark} /> : 1}
        </span>{" "}
        <h2>Topic</h2>
      </div>
      <h3>In order to better assist you,please select a topic</h3>
      <div
        className={styles.topicinput}
        onClick={rest.inputHandler}
        ref={rest.topicRef}
      >
        {rest.option && <h4>Please select your topic *</h4>}
        {!rest.inputState ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        <input
          type="text"
          readOnly
          placeholder="Please select your topic *"
          value={rest.option}
        />
        <div
          className={styles.topicoptions}
          ref={rest.divRef}
          style={
            rest.inputState ? { height: rest.height, zIndex: 2 } : { height: 0 }
          }
        >
          {Object.keys(topicToSubjectMapping).map((topic) => {
            return (
              <div key={topic} onClick={() => rest.selectOptionHandler(topic)}>
                {topic}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TopicOptions;
