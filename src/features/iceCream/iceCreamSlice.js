import { createSlice } from "@reduxjs/toolkit";

import { buyCake } from "../cake/cakeSlice";
const initialState = {
  numberOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyIcecream: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyCake, (state) => {
      state.numberOfIcecream--;
    });
  },
});
export default icecreamSlice.reducer;

export const { buyIcecream, restocked } = icecreamSlice.actions;
