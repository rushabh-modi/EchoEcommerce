import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  products: [],
  featureProducts: [],
  singleProduct: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = products;
      state.featureProducts = products.filter((item) => {
        return item.featured === true;
      });
    },
    getProductsById: (state, action) => {
      state.singleProduct = products.find((item) => item.id === action.payload);
    },
  },
});

export default productSlice.reducer;

export const { getProducts, getProductsById } = productSlice.actions;
