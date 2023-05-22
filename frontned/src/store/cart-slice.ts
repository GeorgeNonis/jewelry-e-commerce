import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {} as InitialState;

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartState(state) {
      state.cartState = !state.cartState;
    },
  },
});

export const { cartState } = cart.actions;

export default cart.reducer;
