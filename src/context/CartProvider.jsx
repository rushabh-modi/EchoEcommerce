import { createContext, useReducer, useEffect } from 'react';
import cartReducer from '../reducers/CartReducer';

const CartContext = createContext();

//localstorage to not empty cart section when refreshed the page
const getLocalCartData = () => {
  let localCartData = localStorage.getItem('LSCart');
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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };

  // incre & decre in cart products

  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREMENT', payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREMENT', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // To clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // To add the data in local Storage
  // get vs set
  useEffect(() => {
    dispatch({ type: 'CART_ITEM_PRICE_TOTAL' });
    localStorage.setItem('LSCart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
