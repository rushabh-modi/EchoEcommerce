import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import ProductReducer from '../reducers/ProductReducer';

const ProductContext = createContext();

const API = process.env.REACT_APP_ECHO_API;

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(API);
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
