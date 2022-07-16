import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Logo from "../Logo";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import {
  DEFAULT_ACTIVE_MENU_ITEM_ABOUT,
  DEFAULT_ACTIVE_MENU_ITEM_HOME,
  LEFT_MENU,
  TOP_MENU,
} from "../../constants";

function Menu({ type }) {
  const [active, setActive] = useState(DEFAULT_ACTIVE_MENU_ITEM_HOME);
  return (
    <div className={type === LEFT_MENU ? styles.menu : styles.secMenu}>
      {type === TOP_MENU && <Logo />}
      <ul>
        <Link to="/">
          <li
            className={`${styles.item} ${
              active === DEFAULT_ACTIVE_MENU_ITEM_HOME ? styles.active : ""
            }`}
            onClick={() => setActive(DEFAULT_ACTIVE_MENU_ITEM_HOME)}
          >
            <AiFillHome /> Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`${styles.item} ${
              active === DEFAULT_ACTIVE_MENU_ITEM_ABOUT ? styles.active : ""
            }`}
            onClick={() => setActive(DEFAULT_ACTIVE_MENU_ITEM_ABOUT)}
          >
            <AiFillInfoCircle /> About
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
