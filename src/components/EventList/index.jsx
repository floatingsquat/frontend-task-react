import styles from "./styles.module.scss";
import EventItem from "../EventItem/";
import { getEvents } from "../../features/eventSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination";
function EventList() {
  const { items, isLoading } = useSelector((state) => state.event);
  const eventItems = items["_embedded"]?.events;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents("cinema"));
    //console.log(items["_embedded"].events);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className={styles.eventList}>
        {eventItems?.map((item) => (
          <EventItem {...item} key={item.id} />
        ))}
      </div>

      <Pagination />
    </>
  );
}

export default EventList;
