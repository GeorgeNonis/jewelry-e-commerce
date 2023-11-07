import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  cartState: false,
  burgerMenu: false,
  notifcation: false,
  purchaseState: false,
  invoiceState: false,
  emailInfo: false,
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
      state.burgerMenu = !state.burgerMenu;
    },
    buynow(state, { payload }) {
      const { quantity, item } = payload;
      const sum = quantity * item.price;
      state.cart.items = [
        {
          ...item,
          quantity,
          total: item.price * quantity,
        },
      ];
      state.cart.quantity = quantity;
      state.cart.sum = sum;
    },
    addItem(state, { payload }) {
      const { id, quantity, item } = payload;
      // console.log({ id, quantity, item });
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
      // console.log(id);
      state.cart.items = [...state.cart.items.filter((i) => i.id !== id)];

      if (state.cart.quantity === 0) {
        state.purchaseState = false;
      }
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
      state.invoiceState = !state.invoiceState;
      state.cartState = false;
    },
    purchase(state, { payload }) {
      const { bln } = payload;
      state.purchaseState = bln;
    },
    invoice(state) {
      state.cartState = !state.cartState;
      state.purchaseState = false;
      state.invoiceState = !state.invoiceState;
    },
    openEmailInfo(state) {
      state.emailInfo = !state.emailInfo;
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
  purchase,
  invoice,
  buynow,
  openEmailInfo,
} = cart.actions;

export default cart.reducer;
