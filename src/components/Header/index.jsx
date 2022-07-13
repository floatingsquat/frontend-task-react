import React from "react";
import styles from "./styles.module.scss";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
function Header() {
  return (
    <>
      <h2>Tarfin JS Task</h2>
      <FilterBox />
      <SearchBox />
    </>
  );
}

export default Header;
