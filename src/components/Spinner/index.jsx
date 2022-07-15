import React from "react";
import loading from "../../assets/loading.gif";
import styles from "./styles.module.scss";
function Spinner() {
  return (
    <div className={styles.loading}>
      <img src={loading} />
    </div>
  );
}

export default Spinner;
