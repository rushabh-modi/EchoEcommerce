import { createSlice } from '@reduxjs/toolkit';

const getLocalCartData = () => {
  let localCartData = localStorage.getItem('EchoCart');
  if (localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: '',
  total_price: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { id, color, amount, product } = action.payload;
      if (!state.cart) {
        state.cart = [];
      }

      let existingProduct = state.cart.find((item) => item.id === id + color);
      if (existingProduct) {
        let updatedProduct = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount >= item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        state.cart = updatedProduct;
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        state.cart = [...state.cart, cartProduct];
      }
    },
    setDecrease: (state, action) => {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === action.payload) {
          let decAmount = item.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...item,
            amount: decAmount,
          };
        } else {
          return item;
        }
      });
      state.cart = updatedProduct;
    },
    setIncrease: (state, action) => {
      let updatedProduct = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          let increAmount = curItem.amount + 1;

          if (increAmount >= curItem.max) {
            increAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: increAmount,
          };
        } else {
          return curItem;
        }
      });
      state.cart = updatedProduct;
    },
    removeItem: (state, action) => {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      state.cart = updatedCart;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    cartItemPriceTotal: (state, action) => {
      let total_item = 0;
      let total_price = 0;

      if (state.cart && state.cart.length > 0) {
        ({ total_item, total_price } = state.cart.reduce(
          (accum, curItem) => {
            let { price, amount } = curItem;
            accum.total_item += amount;
            accum.total_price += price * amount;
            return accum;
          },
          {
            total_item: 0,
            total_price: 0,
          }
        ));
      }
      state.total_item = total_item;
      state.total_price = total_price;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  setDecrease,
  setIncrease,
  removeItem,
  clearCart,
  cartItemPriceTotal,
} = cartSlice.actions;
