import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../feature/product/ProductSlice";

const store = configureStore({
  reducer: {
    productSlice: ProductSlice,
  },
});

export default store;