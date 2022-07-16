import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveMenu,
  setFilterMode,
  setSearchQuery,
} from "../../features/eventSlice";
import {
  DEFAULT_FILTER_MODE_SEARCH_WITH,
  DEFAULT_ACTIVE_MENU_ITEM_HOME,
  DEFAULT_SEARCH_QUERY,
} from "../../constants";

function Logo() {
  const dispatch = useDispatch();
  const { filterMode, searchQuery, activeMenu } = useSelector(
    (state) => state.event
  );
  const onClickHandler = () => {
    if (filterMode !== DEFAULT_FILTER_MODE_SEARCH_WITH) {
      dispatch(setFilterMode(DEFAULT_FILTER_MODE_SEARCH_WITH));
    }
    if (activeMenu !== DEFAULT_ACTIVE_MENU_ITEM_HOME) {
      dispatch(setActiveMenu(DEFAULT_ACTIVE_MENU_ITEM_HOME));
    }
    if (searchQuery !== DEFAULT_SEARCH_QUERY) {
      dispatch(setSearchQuery(DEFAULT_SEARCH_QUERY));
    }
  };
  return (
    <div className={styles.logo}>
      <Link to="/" onClick={onClickHandler}>
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Logo;
