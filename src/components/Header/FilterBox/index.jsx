import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { ascendingSort, descendingSort } from "../../../helpers/sort";
import { setFilterItems, setFilterMode } from "../../../features/eventSlice";
import {
  DEFAULT_FILTER_MODE_SEARCH_WITH,
  FILTER_MODE_ASCENDING,
  FILTER_MODE_DESCENDING,
} from "../../../constants";
function FilterBox() {
  const dispatch = useDispatch();
  const { items, filterMode } = useSelector((state) => state.event);

  const onChangeFilterHandler = (e) => {
    dispatch(setFilterMode(e.target.value));
    const eventList = items["_embedded"].events;

    if (Number(e.target.value) === FILTER_MODE_ASCENDING) {
      dispatch(setFilterItems(ascendingSort(eventList)));
    } else {
      // FILTER_MODE_DESCENDING
      dispatch(setFilterItems(descendingSort(eventList)));
    }
  };

  return (
    <select
      name="filterr"
      onChange={onChangeFilterHandler}
      value={filterMode}
      className={styles.sorting}
    >
      <option disabled value={DEFAULT_FILTER_MODE_SEARCH_WITH}>
        Filter with:
      </option>
      <option value={FILTER_MODE_ASCENDING}>Ascending</option>
      <option value={FILTER_MODE_DESCENDING}>Descending</option>
    </select>
  );
}

export default FilterBox;
