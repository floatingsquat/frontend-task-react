import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventDetails } from "../../features/eventSlice";
import styles from "./styles.module.scss";
function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, eventDetails } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getEventDetails(id));
  }, []);
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  const mapUrl = `https://maps.google.com/maps?&hl=en&q=${eventDetails["location"]?.location?.latitude}, ${eventDetails["location"]?.location?.longitude}&ie=UTF8&output=embed`;

  return (
    <div className={styles.eventDetail}>
      <div className={styles.iframeWrapper}>
        <iframe
          class="shadow mb-0 mt-0 map"
          //52.8488733, 13.67978
          src={mapUrl}
          frameborder="0"
          width="100%"
          height="300"
          scrolling="no"
        ></iframe>
      </div>

      <h2>{eventDetails["userData"]?.name}</h2>
    </div>
  );
}

export default EventDetail;
