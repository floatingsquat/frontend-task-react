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
  const size = items.page?.size;
  const safeTotalPageCount =
    totalPages * size > 1000 ? 1000 / size : totalPages; // because "API Limits Exceeded: Max paging depth exceeded. (page * size) must be less than 1,000"
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      searchQuery: "football",
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
        totalPages={safeTotalPageCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default EventList;
