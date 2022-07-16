import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Logo from "../Logo";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

function Menu({ type }) {
  const [active, setActive] = useState(0);
  return (
    <div className={type === 0 ? styles.menu : styles.secMenu}>
      {type === 1 && <Logo />}
      <ul>
        <Link to="/">
          <li
            className={`${styles.item} ${active === 0 ? styles.active : ""}`}
            onClick={() => setActive(0)}
          >
            <AiFillHome /> Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`${styles.item} ${active === 1 ? styles.active : ""}`}
            onClick={() => setActive(1)}
          >
            <AiFillInfoCircle /> About
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
