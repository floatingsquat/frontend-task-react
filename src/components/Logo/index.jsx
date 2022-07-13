import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} />
    </div>
  );
}

export default Logo;
