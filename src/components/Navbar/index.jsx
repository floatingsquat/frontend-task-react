import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./styles.module.scss";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Menu type={0} />
    </div>
  );
}

export default Navbar;
