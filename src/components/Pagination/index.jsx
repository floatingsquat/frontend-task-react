import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_RANGE,
  DEFAULT_FILTER_MODE_SEARCH_WITH,
} from "../../constants";
import { getEvents, setFilterMode } from "../../features/eventSlice";
import styles from "./styles.module.scss";

function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
  pageRange,
  setPageRange,
}) {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.event);

  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(Array.from(Array(totalPages).keys()));
  }, []);

  useEffect(() => {
    dispatch(setFilterMode(DEFAULT_FILTER_MODE_SEARCH_WITH));
  }, [currentPage]);

  const changePage = (index) => {
    setCurrentPage(index);
    dispatch(getEvents({ searchQuery, page: index }));
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - 5) {
      return (
        <button
          className={`${styles.page} ${
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => changePage(page)}
          key={page}
        >
          {page}
        </button>
      );
    }

    return null;
  };

  const handlePrevious = () => {
    if (currentPage - 1 <= pageRange - DEFAULT_PAGE_RANGE) {
      setPageRange(pageRange - DEFAULT_PAGE_RANGE);
    }

    setCurrentPage(currentPage - 1);
    dispatch(getEvents({ searchQuery, page: currentPage + 1 }));
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      setPageRange(pageRange + DEFAULT_PAGE_RANGE);
    }

    setCurrentPage(currentPage + 1);
    dispatch(getEvents({ searchQuery, page: currentPage + 1 }));
  };
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === DEFAULT_PAGE} onClick={handlePrevious}>
        Previous
      </button>

      {pages.map((page) => renderPaginationItem(page))}

      <button disabled={currentPage === pages.length} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
