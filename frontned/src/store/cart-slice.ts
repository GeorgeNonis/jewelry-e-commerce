import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {} as InitialState;

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initial(state, { payload }) {
      console.log("x");
    },
  },
});

export const { initial } = cart.actions;

export default cart.reducer;
