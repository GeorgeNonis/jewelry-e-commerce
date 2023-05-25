import styles from "./styles.module.scss";

interface LoadingSpinnerProps {
  height?: boolean;
}

const LoadingSpinner = ({ height }: LoadingSpinnerProps) => {
  // console.log(height);
  return (
    <div
      className={styles.loadingSpinner}
      style={height ? { minHeight: "unset" } : undefined}
      // style={{ minHeight: "30rem" }}
    >
      {[...Array(4).keys()].map((e, i) => {
        return <span key={i} accessKey={`${e}`}></span>;
      })}
    </div>
  );
};
export default LoadingSpinner;
