import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Logo;
