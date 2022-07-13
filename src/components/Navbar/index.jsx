import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./styles.module.scss";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Navbar;
