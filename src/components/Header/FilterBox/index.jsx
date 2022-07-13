import React from "react";
import styles from "./styles.module.scss";
function FilterBox() {
  return (
    <input
      type="text"
      className={styles.filter}
      placeholder="Search an event..."
    />
  );
}

export default FilterBox;
