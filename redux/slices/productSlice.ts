import { Product } from "@/types/product";
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface ProductContextType {
  products: Product[];
}

const initialState: ProductContextType = {
  products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      console.log(action.payload, "payload");
      state.products = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.products.products) {
        return state;
      }
      state.products = action.payload.product.products;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
