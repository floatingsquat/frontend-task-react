import React from "react";
import styles from "./styles.module.scss";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
function Header() {
  return (
    <div className={styles.header}>
      <FilterBox />
      <SearchBox />
    </div>
  );
}

export default Header;
