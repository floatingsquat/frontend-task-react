import React from "react";
import styles from "./styles.module.scss";
function SearchBox() {
  return (
    <select className={styles.sorting}>
      <option value="test">Category</option>
      <option value="test1">Test 1</option>
      <option value="test2">Test 2</option>
    </select>
  );
}

export default SearchBox;
