/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/ui/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import NoFoundRoute from './pages/NoFoundRoute';

import { cartItemPriceTotal } from './features/cart/cartSlice';
import {
  filterProducts,
  loadFilterProducts,
  sortingProducts,
} from './features/filter/filterSlice';
import { fetchProducts } from './features/product/productSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const { sorting_value, filters } = useSelector((store) => store.filter);
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(cartItemPriceTotal());
    localStorage.setItem('EchoCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortingProducts());
  }, [products, sorting_value, filters]);

  useEffect(() => {
    dispatch(loadFilterProducts(products));
  }, [products]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoFoundRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
