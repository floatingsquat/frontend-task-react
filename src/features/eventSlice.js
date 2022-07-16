import { eventListBySearch, eventDetailsById } from "../config/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DEFAULT_ACTIVE_MENU_ITEM_HOME,
  DEFAULT_FILTER_MODE_SEARCH_WITH,
} from "../constants";

const initialState = {
  items: [],
  eventDetails: [],
  isLoading: [],
  filterMode: DEFAULT_FILTER_MODE_SEARCH_WITH,
  searchQuery: "football",
  activeMenu: DEFAULT_ACTIVE_MENU_ITEM_HOME,
};

export const getEvents = createAsyncThunk("events/getEvents", async (data) => {
  let searchQuery = data.searchQuery;
  let page = data.page;
  const res = await axios(eventListBySearch(searchQuery, page));
  return res.data;
});

export const getEventDetails = createAsyncThunk(
  "events/getEventDetails",
  async (id) => {
    try {
      const res = await axios(eventDetailsById(id));
      return {
        location: res.data["_embedded"].venues[0],
        userData: res.data,
      };
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility

      return rejectWithValue(err.response.data);
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setFilterMode: (state, action) => {
      state.filterMode = action.payload;
    },
    setFilterItems: (state, action) => {
      state.items["_embedded"].events = action.payload;
    },
  },
  extraReducers: {
    // For fetching events
    [getEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getEvents.rejected]: (state) => {
      state.isLoading = false;
    },

    // For event detail
    [getEventDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getEventDetails.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.eventDetails = action.payload;
    },
    [getEventDetails.rejected]: (state) => {
      state.isLoading = false;
      console.log("HATAAAAAAAAAAAAAAA FOR REJECTED");
    },
  },
});

export const { setSearchQuery, setFilterMode, setFilterItems, setActiveMenu } =
  eventSlice.actions;
export default eventSlice.reducer;
