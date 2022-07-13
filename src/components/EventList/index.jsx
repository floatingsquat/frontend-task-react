import React from "react";
import styles from "./styles.module.scss";
import EventItem from "../EventItem/";

function EventList() {
  return (
    <div className={styles.eventList}>
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}

export default EventList;
