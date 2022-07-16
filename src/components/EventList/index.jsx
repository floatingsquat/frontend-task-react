import styles from "./styles.module.scss";
import EventItem from "../EventItem/";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import { DEFAULT_PAGE_RANGE, SIZE_OF_PER_PAGE } from "../../constants";
function EventList() {
  const { items, isLoading, searchQuery } = useSelector((state) => state.event);
  const eventItems = items["_embedded"]?.events;
  const totalPages = items.page?.totalPages;
  const safeTotalPageCount = useMemo(
    () =>
      totalPages * SIZE_OF_PER_PAGE > 1000
        ? 1000 / SIZE_OF_PER_PAGE
        : totalPages,
    [totalPages]
  );
  // because "API Limits Exceeded: Max paging depth exceeded. (page * size) must be less than 1,000"
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(DEFAULT_PAGE_RANGE);

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
