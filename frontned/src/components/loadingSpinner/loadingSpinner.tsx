import styles from "./styles.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinner}>
      {[...Array(4).keys()].map((e, i) => {
        return <span key={i}></span>;
      })}
    </div>
  );
};
export default LoadingSpinner;
