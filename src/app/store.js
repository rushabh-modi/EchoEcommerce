import productReducer from '../features/product/productSlice';
import filterReducer from '../features/filter/filterSlice';
import cartReducer from '../features/cart/cartSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    product: productReducer,
  },
});

export default store;
