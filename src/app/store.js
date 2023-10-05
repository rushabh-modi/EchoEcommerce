import productReducer from '../features/product/productSlice';
import filterReducer from '../features/filter/filterSlice';
import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';

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
