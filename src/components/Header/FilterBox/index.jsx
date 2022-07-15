import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
function FilterBox() {
  const [filter, setFilter] = useState("featured"); // TODO: Constant -->  Default (0): Featured, 1 Ascending, 2 Descending
  //const filterVal =filter === 0 ? "featured" : filter === 1 ? "ascending" : "descending";
  const dispatch = useDispatch();
  const { items, isLoading, searchQuery } = useSelector((state) => state.event);
  const onChangeFilterHandler = (e) => {
    //console.log(e.target.value);
    setFilter(e.target.value);

    if (e.target.value === "ascending") {
      // console.log("Alphabetical:", arr.sort((a,b) => a.name > b.name));
      // console.log("Reversed:", arr.sort((a,b) => a.name < b.name));
      const eventList = items["_embedded"].events;
      console.log(eventList[0].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  return (
    <select
      name="filterr"
      onChange={onChangeFilterHandler}
      value={filter}
      className={styles.sorting}
    >
      <option value="featured">Featured</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  );
}

export default FilterBox;
