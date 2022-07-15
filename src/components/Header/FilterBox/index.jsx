import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { ascendingSort, descendingSort } from "../../../helpers/sort";
import { setFilterItems } from "../../../features/eventSlice";
function FilterBox() {
  const [filter, setFilter] = useState(0); // TODO: Constant -->  Default (0): Filter with, 1 Ascending, 2 Descending
  const dispatch = useDispatch();
  const { items, isLoading, searchQuery } = useSelector((state) => state.event);

  const onChangeFilterHandler = (e) => {
    setFilter(e.target.value);
    const eventList = items["_embedded"].events;
    if (e.target.value === "ascending") {
      dispatch(setFilterItems(ascendingSort(eventList)));
    } else if (e.target.value === "descending") {
      dispatch(setFilterItems(descendingSort(eventList)));
    } else {
    }
  };

  return (
    <select
      name="filterr"
      onChange={onChangeFilterHandler}
      value={filter}
      className={styles.sorting}
    >
      <option disabled value="0">
        Filter with:
      </option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  );
}

export default FilterBox;
