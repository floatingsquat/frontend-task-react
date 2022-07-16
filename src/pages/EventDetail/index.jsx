import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { getEventDetails } from "../../features/eventSlice";
import { formatDate } from "../../helpers/formatDate";
import { locationInfo } from "../../helpers/locationInfo";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";
function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, eventDetails } = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(getEventDetails(id)).then((res) => {
      if (res.error) {
        navigate("/404");
      }
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.eventDetail}>
      <div className={styles.iframeWrapper}>
        <iframe
          src={locationInfo(
            eventDetails["location"]?.location?.latitude,
            eventDetails["location"]?.location?.longitude
          )}
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
            {eventDetails["location"]?.address &&
              eventDetails["location"]?.address.line1}
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.tagWrapper}>
              <span className={styles.date}>
                {eventDetails["userData"]?.dates?.start &&
                  formatDate(eventDetails["userData"]?.dates?.start?.localDate)}
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
            <div className={styles.buttonWrapper}>
              <Link to="/">Go Back ▶</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
