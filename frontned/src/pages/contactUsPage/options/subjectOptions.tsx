import { AiOutlineCheck } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useContactUsPageObj } from "./interfaces";
import styles from "../styles.module.scss";

const SubjectOptions = ({ ...rest }: useContactUsPageObj) => {
  return (
    <div>
      <div className={styles.topicdiv}>
        <span style={rest.subject ? { background: "black" } : undefined}>
          {rest.subject ? <AiOutlineCheck className={styles.tickmark} /> : 2}
        </span>{" "}
        <h2>Subject</h2>
      </div>

      <div
        className={styles.test}
        style={
          rest.option ? { height: "8rem", overflow: "visible" } : undefined
        }
      >
        <h3>Select one of the following subjects</h3>
        <div
          className={styles.topicinput}
          onClick={rest.subjectHandler}
          ref={rest.subjectRef}
        >
          {rest.option && (
            <h4 className={styles.h4}>
              Select one of the following subjects *
            </h4>
          )}
          {!rest.inputState ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          <input
            className={styles.input}
            type="text"
            readOnly
            placeholder="Select one of the following subjects *"
            value={rest.subject}
          />
          <div
            className={styles.topicoptions}
            ref={rest.subDivRef}
            style={rest.subjectState ? { height: "8rem" } : { height: 0 }}
          >
            {rest.subjectsOptions.map((topic) => {
              return (
                <div
                  key={topic}
                  onClick={() => rest.selectSubjectHandler(topic)}
                >
                  {topic}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubjectOptions;
