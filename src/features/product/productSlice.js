import { createSlice } from '@reduxjs/toolkit';
import productsDB from '../../productsDB';

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
      state.products = productsDB;
      state.featureProducts = productsDB.filter((item) => {
        return item.featured === true;
      });
    },
    getProductsById: (state, action) => {
      state.singleProduct = productsDB.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export default productSlice.reducer;

export const { getProducts, getProductsById } = productSlice.actions;
