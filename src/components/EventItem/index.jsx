import styles from "./styles.module.scss";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  dayOfDate,
  formatDate,
  monthNameOfDate,
} from "../../helpers/formatDate";
import { useDispatch } from "react-redux";
import { setActiveMenu } from "../../features/eventSlice";
import { DEFAULT_ACTIVE_MENU_ITEM_DETAIL_PAGE } from "../../constants";

function EventItem({ name, dates, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.eventItem}>
      <div className={styles.shortDate}>
        <div className={styles.numericDate}>
          {dayOfDate(dates.start.localDate)}
        </div>
        <small>
          {monthNameOfDate(dates.start?.localDate) &&
            monthNameOfDate(dates.start?.localDate).toLocaleUpperCase()}
        </small>
      </div>
      <div className={styles.eventTitle}>{name}</div>
      <div className={styles.status}>{dates.status.code}</div>
      <div className={styles.fullDate}>
        <AiFillCalendar />
        {formatDate(dates.start.localDate)}
      </div>

      <Link
        to={`/detail/${id}`}
        className={styles.detailButton}
        onClick={() =>
          dispatch(setActiveMenu(DEFAULT_ACTIVE_MENU_ITEM_DETAIL_PAGE))
        }
      >
        Show Detail
      </Link>
    </div>
  );
}

export default EventItem;
