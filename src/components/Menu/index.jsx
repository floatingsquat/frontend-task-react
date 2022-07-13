import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to="/">
            <AiFillHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <AiFillInfoCircle /> About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
