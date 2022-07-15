import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../features/eventSlice";
import styles from "./styles.module.scss";

const DEFAULT_PAGE_RANGE = 5;
const DEFAULT_PAGE = 1;

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.event);
  const [pages, setPages] = useState([]);
  console.log("pages", pages);
  useEffect(() => {
    console.log("total pages", totalPages);
    setPages(Array.from(Array(totalPages).keys()));
  }, []);

  const [pageRange, setPageRange] = useState(DEFAULT_PAGE_RANGE);
  useEffect(() => {
    console.log("pageRange: ", pageRange);
  }, [pageRange]);

  const changePage = (index) => {
    setCurrentPage(index);
    dispatch(getEvents({ searchQuery: searchQuery, page: index }));
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - 5) {
      console.log("string ", { currentPage, pageRange });
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
      console.log({ currentPage, pageRange });
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
