import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./cart-slice";

const store = configureStore({
  reducer: { cart },
});

const rootReducer = combineReducers({ cart });
export type IRootState = ReturnType<typeof rootReducer>;

export default store;
