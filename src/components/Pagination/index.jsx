import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState, useEffect } from "react";
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
    //console.log(page);
    setCurrentPage(page);
    //console.log(currentButton);
    const data = {
      searchQuery: "cinema",
      page: page,
    };
    dispatch(getEvents(data));
    console.log("yeni sayfa isteği atıldı", page);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${
          currentPage === numOfPages.length ? styles.disabled : styles.prev
        }`}
        onClick={goPrev}
      >
        Previous
      </button>

      {numOfPages.map((page, index) => (
        <button className={styles.page} onClick={() => pageChangeHandler(page)}>
          {page}
        </button>
      ))}

      <button
        onClick={goNext}
        className={`${
          currentPage === numOfPages.length ? styles.disabled : styles.next
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
