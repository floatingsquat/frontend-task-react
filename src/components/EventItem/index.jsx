import React from "react";
import styles from "./styles.module.scss";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  dayOfDate,
  formatDate,
  monthNameOfDate,
} from "../../helpers/formatDate";
function EventItem({ name, dates, id }) {
  return (
    <div className={styles.eventItem}>
      <div className={styles.shortDate}>
        <div className={styles.numericDate}>
          {dayOfDate(dates.start.localDate)}
        </div>
        <small>{monthNameOfDate(dates.start?.localDate)}</small>
      </div>
      <div className={styles.eventTitle}>{name}</div>
      <div className={styles.status}>{dates.status.code}</div>
      <div className={styles.fullDate}>
        <AiFillCalendar />
        {formatDate(dates.start.localDate)}
      </div>

      <Link to={`/detail/${id}`} className={styles.detailButton}>
        Show Detail
      </Link>
    </div>
  );
}

export default EventItem;
