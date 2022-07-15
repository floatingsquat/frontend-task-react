import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../features/eventSlice";
import styles from "./styles.module.scss";

function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
  pageRange,
  setPageRange,
}) {
  const DEFAULT_PAGE = 1;
  const DEFAULT_PAGE_RANGE = 5;
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.event);

  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(Array.from(Array(totalPages).keys()));
  }, []);

  const changePage = (index) => {
    setCurrentPage(index);
    dispatch(getEvents({ searchQuery: searchQuery, page: index }));
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
    dispatch(getEvents({ searchQuery: searchQuery, page: currentPage + 1 }));
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      setPageRange(pageRange + DEFAULT_PAGE_RANGE);
    }

    setCurrentPage(currentPage + 1);
    dispatch(getEvents({ searchQuery: searchQuery, page: currentPage + 1 }));
  };
  return (
    <div className={styles.pagination}>
      {/* <h1>{currentPage}</h1> */}

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
