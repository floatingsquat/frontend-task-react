import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../features/eventSlice";
import styles from "./styles.module.scss";

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  const Pages = [];
  const DEFAULT_PAGE_RANGE = 5;
  const DEFAULT_PAGE = 1;

  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.event);
  for (let i = 1; i < totalPages; i++) {
    Pages.push(i);
  }

  const [pageRange, setPageRange] = useState(DEFAULT_PAGE_RANGE);

  const changePage = (index) => {
    setCurrentPage(index);
    dispatch(getEvents({ searchQuery: searchQuery, page: index }));
  };

  const renderPaginationItem = (page) => {
    if (page <= pageRange && page > pageRange - 5) {
      return (
        <button
          className={styles.page}
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
      console.log("prev range tetiklenmesi gerek");
    }
    dispatch(getEvents({ searchQuery: searchQuery, page: currentPage + 1 }));

    setCurrentPage(currentPage - 1);
    console.log("buraya geliyor prev", currentPage);
  };

  const handleNext = () => {
    if (currentPage + 1 > pageRange) {
      setPageRange(pageRange + DEFAULT_PAGE_RANGE);
      console.log("next range tetiklenmesi gerek");
    }
    dispatch(getEvents({ searchQuery: searchQuery, page: currentPage + 1 }));
    setCurrentPage(currentPage + 1);
    console.log("buraya geliyor next", currentPage);
  };
  return (
    <div className={styles.pagination}>
      {/* <h1>{currentPage}</h1> */}

      <button disabled={currentPage === DEFAULT_PAGE} onClick={handlePrevious}>
        Previous
      </button>

      {Pages.map((page) => renderPaginationItem(page))}

      <button disabled={currentPage === Pages.length} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
