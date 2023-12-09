import productReducer from './slices/productSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    product: productReducer,
    modal: modalReducer,
  },
});

export default store;
