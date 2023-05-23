import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  cartState: false,
  burgerMenu: false,
  notifcation: false,
  cart: {
    quantity: 0,
    items: [],
    sum: 0,
  },
} as InitialState;

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartState(state) {
      state.cartState = !state.cartState;
    },
    burgerState(state) {
      state.cartState = !state.cartState;
    },
    addItem(state, { payload }) {
      const { id, quantity, item } = payload;
      console.log({ id, quantity, item });
      const doesItemExist = state.cart.items.find((i) => i.id == id);
      const sum = quantity * item.price;
      state.cart.sum += sum;
      state.cart.quantity += quantity;

      if (doesItemExist) {
        doesItemExist.quantity += quantity;
        doesItemExist.total += item.price * quantity;
        return;
      }
      state.cart.items.push({
        ...item,
        quantity,
        total: item.price * quantity,
      });
    },
    removeItem(state, { payload }) {
      const { id } = payload;
      const item = state.cart.items.find((i) => i.id == id);
      state.cart.quantity -= item?.quantity ?? 0;
      state.cart.sum -= item?.total ?? 0;
      console.log(id);
      state.cart.items = [...state.cart.items.filter((i) => i.id !== id)];
    },
    increaseItem(state, { payload }) {
      const { id } = payload;
      const item = state.cart.items.find((i) => i.id == id);

      item!.quantity += 1;
      item!.total += item!.price;

      state.cart.quantity += 1;
      state.cart.sum += item!.price;
    },
    decreasetItem(state, { payload }) {
      const { id } = payload;
      const item = state.cart.items.find((i) => i.id == id);

      item!.quantity -= 1;
      item!.total -= item!.price;

      state.cart.quantity -= 1;
      state.cart.sum -= item!.price;
    },
    clearCart(state) {
      state.cart.items = [];
      state.cart.quantity = 0;
      state.cart.sum = 0;
    },
  },
});

export const {
  cartState,
  burgerState,
  addItem,
  removeItem,
  increaseItem,
  decreasetItem,
  clearCart,
} = cart.actions;

export default cart.reducer;
