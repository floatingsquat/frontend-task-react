import React from "react";
import styles from "./styles.module.scss";
import { AiFillCalendar } from "react-icons/ai";
function EventItem() {
  return (
    <div className={styles.eventItem}>
      <div className={styles.shortDate}>
        <div className={styles.numericDate}>23</div>
        <small>JUN</small>
      </div>
      <div className={styles.eventTitle}>
        Pembebinaan Pelaku Pariwisata - Ekraf
      </div>
      <div className={styles.status}>On Sale</div>
      <div className={styles.fullDate}>
        <AiFillCalendar />
        23.04.2022 - 24.04.2022
      </div>

      <button className={styles.detailButton}>Detail</button>
    </div>
  );
}

export default EventItem;
