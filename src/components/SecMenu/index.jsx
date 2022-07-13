import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
function SecMenu() {
  return (
    <div className={styles.secMenu}>
      <Logo />
      <div className={styles.menu}>
        <Link to="/">
          <AiFillHome /> Home
        </Link>
        <Link to="/about">
          <AiFillInfoCircle /> About
        </Link>
      </div>
    </div>
  );
}

export default SecMenu;
