import styles from "./styles.module.scss";
import EventItem from "../EventItem/";
import { getEvents } from "../../features/eventSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function EventList() {
  const { items, isLoading } = useSelector((state) => state.event);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents("cinema"));
    console.log(items);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.eventList}>
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}

export default EventList;
