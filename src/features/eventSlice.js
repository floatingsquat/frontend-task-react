import { eventListBySearch } from "../config/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: [],
  searchQuery: "",
};

export const getEvents = createAsyncThunk("events/getEvents", async (q) => {
  const res = await axios(eventListBySearch(q));
  return res.data;
});

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
  },
});

export const { setSearchQuery } = eventSlice.actions;
export default eventSlice.reducer;
