// TrackingComponent.tsx

import React from "react";
import styles from "./styles.module.scss";

const TrackingComponent: React.FC = () => {
  return (
    <div className={styles.trackingContainer}>
      <h2 className={styles.trackingTitle}>Order Tracking</h2>
      <div className={styles.trackingId}>
        <span className={styles.trackingIdLabel}>Tracking ID:</span>
        <span className={styles.trackingIdValue}>123456789</span>
      </div>
      <div className={styles.checkpoints}>
        <div className={styles.checkpoint}>
          <span className={styles.checkpointIcon}>&#10004;</span>
          <span className={styles.checkpointText}>Retrieved</span>
        </div>
        <div className={styles.dottedLine}></div>
        <div className={styles.checkpoint}>
          <span className={styles.checkpointIcon}>&#9675;</span>
          <span className={styles.checkpointText}>Out for Delivery</span>
        </div>
        <div className={styles.dottedLine}></div>
        <div className={styles.checkpoint}>
          <span className={styles.checkpointIcon}>&#9675;</span>
          <span className={styles.checkpointText}>Delivered to Local Post</span>
        </div>
      </div>
    </div>
  );
};

export default TrackingComponent;
