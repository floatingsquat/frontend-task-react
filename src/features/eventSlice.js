import { eventListBySearch, eventDetailsById } from "../config/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  eventDetails: [],
  isLoading: [],
  filterMode: 0,
  searchQuery: "football",
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
    const res = await axios(eventDetailsById(id));
    return {
      location: res.data["_embedded"].venues[0],
      userData: res.data,
    };
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterMode: (state, action) => {
      state.filterMode = action.payload;
    },
    setFilterItems: (state, action) => {
      //console.log(action.payload);

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
    },
  },
});

export const { setSearchQuery, setFilterMode, setFilterItems } =
  eventSlice.actions;
export default eventSlice.reducer;
