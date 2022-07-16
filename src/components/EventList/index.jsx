import styles from "./styles.module.scss";
import EventItem from "../EventItem/";
import { getEvents } from "../../features/eventSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
function EventList() {
  const { items, isLoading, searchQuery } = useSelector((state) => state.event);
  const DEFAULT_PAGE_RANGE = 5;
  const DEFAULT_PAGE = 1;
  const eventItems = items["_embedded"]?.events;
  const totalPages = items.page?.totalPages;
  const size = items.page?.size;
  const safeTotalPageCount =
    totalPages * size > 1000 ? 1000 / size : totalPages; // because "API Limits Exceeded: Max paging depth exceeded. (page * size) must be less than 1,000"
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(DEFAULT_PAGE_RANGE);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner />;
  }

  return searchQuery ? (
    <>
      {" "}
      <div className={styles.eventList}>
        {eventItems?.map((item) => (
          <EventItem {...item} key={item.id} />
        ))}
      </div>
      <Pagination
        totalPages={safeTotalPageCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageRange={pageRange}
        setPageRange={setPageRange}
      />
    </>
  ) : (
    <h4>Try to type something...</h4>
  );
}

export default EventList;
