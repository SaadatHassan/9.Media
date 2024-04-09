import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: true,
    data: [],
    error: null,
  },
  reducers: {},
});

export const { usersReducer } = usersSlice.reducer;
