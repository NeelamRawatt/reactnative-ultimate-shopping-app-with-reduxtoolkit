import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductSilce";
import { CartSlice } from "./CartSlice";
export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
  },
});
