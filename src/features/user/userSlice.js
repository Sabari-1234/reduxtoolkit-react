//const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const { default: axios } = require("axios");
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://662a055367df268010a24f31.mockapi.io/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export default userSlice.reducer;
//module.exports.userReducer = userSlice.reducer;

//module.exports.fetchUsers = fetchUsers;
