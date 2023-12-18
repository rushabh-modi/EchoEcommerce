import productReducer from './slices/productSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

import { useSelector } from 'react-redux';
const { configureStore } = require('@reduxjs/toolkit');

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
      filter: filterReducer,
      product: productReducer,
      modal: modalReducer,
    },
  });

export const useCart = () => useSelector((state) => state.cart);
export const useFilter = () => useSelector((state) => state.filter);
export const useProduct = () => useSelector((state) => state.product);
export const useModal = () => useSelector((state) => state.modal);
