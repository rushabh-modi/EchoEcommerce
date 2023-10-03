import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProductsStatus',
  async () => {
    const responce = await axios.get('/api/products');
    return responce.data;
  }
);

export const fetchProductsById = createAsyncThunk(
  'product/fetchProductsByIdStatus',
  async (url) => {
    const responce = await axios.get(url);
    return responce.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.featureProducts = action.payload.filter((item) => {
        return item.featured === true;
      });
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      state.isSingleLoading = true;
    });
    builder.addCase(fetchProductsById.pending, (state) => {
      state.isSingleLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.isSingleLoading = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(fetchProductsById.rejected, (state) => {
      state.isSingleLoading = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
