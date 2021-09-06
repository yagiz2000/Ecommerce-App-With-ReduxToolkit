import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import headerReducer from "../features/header/headerSlice";
export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart:cartReducer,
    header:headerReducer
  },
});
