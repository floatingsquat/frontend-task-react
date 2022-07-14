import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector((state) => state.event);

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  return (
    <div className={styles.eventDetail}>
      <div className={styles.iframeWrapper}>
        <iframe
          class="shadow mb-0 mt-0 map"
          src="https://maps.google.com/maps?&amp;hl=de&amp;q=52.8488733, 13.67978&amp;ie=UTF8&amp;output=embed"
          frameborder="0"
          width="100%"
          height="300"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default EventDetail;
