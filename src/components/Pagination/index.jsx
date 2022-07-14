import { useDispatch } from "react-redux";
import { getEvents } from "../../features/eventSlice";
import styles from "./styles.module.scss";

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  const numOfPages = [];
  const dispatch = useDispatch();
  for (let i = 1; i < totalPages; i++) {
    numOfPages.push(i);
  }

  const goNext = () => {
    setCurrentPage((page) => page + 1);
    pageChangeHandler(currentPage + 1);
  };

  const goPrev = () => {
    setCurrentPage((page) => page - 1);
    pageChangeHandler(currentPage - 1);
  };

  const pageChangeHandler = (page) => {
    setCurrentPage(page);
    const data = {
      searchQuery: "football",
      page: page,
    };
    dispatch(getEvents(data));
    console.log("yeni sayfa isteği atıldı", page);
  };

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1 && true} onClick={goPrev}>
        Previous
      </button>

      {numOfPages.map((page, index) => (
        <button className={styles.page} onClick={() => pageChangeHandler(page)}>
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === numOfPages.length && true}
        onClick={goNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
