import { eventListBySearch, getEventById } from "../config/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: [],
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
    const res = await axios(getEventById(id));
    return res.data;
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
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

export const { setSearchQuery } = eventSlice.actions;
export default eventSlice.reducer;
