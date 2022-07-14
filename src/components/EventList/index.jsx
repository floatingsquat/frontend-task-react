import styles from "./styles.module.scss";
import EventItem from "../EventItem/";
import { getEvents } from "../../features/eventSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination";
function EventList() {
  const { items, isLoading } = useSelector((state) => state.event);
  const eventItems = items["_embedded"]?.events;
  const totalPages = items.page?.totalPages;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      searchQuery: "cinema",
      page: 1,
    };
    dispatch(getEvents(data));
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

      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default EventList;
