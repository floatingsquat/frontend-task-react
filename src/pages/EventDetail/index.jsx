import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { getEventDetails } from "../../features/eventSlice";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.scss";
function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, eventDetails } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getEventDetails(id));
  }, []);
  if (isLoading) {
    return <Spinner />; // ????
  }
  const mapUrl = `https://maps.google.com/maps?&hl=en&q=${eventDetails["location"]?.location?.latitude}, ${eventDetails["location"]?.location?.longitude}&ie=UTF8&output=embed`;

  return (
    <div className={styles.eventDetail}>
      <div className={styles.iframeWrapper}>
        <iframe
          //52.8488733, 13.67978
          src={mapUrl}
          frameBorder="0"
          width="100%"
          height="500"
          scrolling="no"
        ></iframe>
      </div>

      <div className={styles.infoWrapper}>
        <img
          className={styles.eventImage}
          src={eventDetails["userData"]?.images[0].url}
        />
        <div className={styles.info}>
          <h3>{eventDetails["userData"]?.name}</h3>

          <div className={styles.locationInfo}>
            {eventDetails["location"]?.country.name},{" "}
            {eventDetails["location"]?.city.name},{" "}
            {eventDetails["location"]?.address.line1}
          </div>
          <div className={styles.tagWrapper}>
            <span className={styles.date}>
              {formatDate(eventDetails["userData"]?.dates?.start?.localDate)}
            </span>
            {eventDetails["userData"]?.dates.start.localTime && (
              <span className={styles.time}>
                {(eventDetails["userData"]?.dates.start.localTime).substring(
                  0,
                  (eventDetails["userData"]?.dates.start.localTime).length - 3
                )}
              </span>
            )}
            <span className={styles.genre}>
              {eventDetails["userData"]?.classifications[0].genre.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
