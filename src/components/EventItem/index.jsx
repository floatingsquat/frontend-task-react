import React from "react";
import styles from "./styles.module.scss";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
function EventItem({ name, locale, dates, id }) {
  return (
    <div className={styles.eventItem}>
      <div className={styles.shortDate}>
        <div className={styles.numericDate}>23</div>
        <small>JUN</small>
      </div>
      <div className={styles.eventTitle}>{name}</div>
      <div className={styles.status}>{locale}</div>
      <div className={styles.fullDate}>
        <AiFillCalendar />
        {dates.start.localDate}
      </div>

      <Link to={`/detail/${id}`} className={styles.detailButton}>
        Show Detail
      </Link>
    </div>
  );
}

export default EventItem;
