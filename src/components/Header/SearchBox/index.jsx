import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvents,
  setSearchQuery,
  setFilterMode,
} from "../../../features/eventSlice";
import { DEFAULT_FILTER_MODE_SEARCH_WITH } from "../../../constants";

function SearchBox() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.event);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchQuery) {
        dispatch(getEvents({ searchQuery }));
      }
    }, 500);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery]);

  const onChangeHandler = (e) => {
    dispatch(setSearchQuery(e.currentTarget.value));
    dispatch(setFilterMode(DEFAULT_FILTER_MODE_SEARCH_WITH));
  };
  return (
    <input
      type="text"
      className={styles.filter}
      placeholder="Search an event..."
      value={searchQuery}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
