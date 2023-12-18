import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './components/ui/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import NoFoundRoute from './pages/NoFoundRoute';
import { cartItemPriceTotal } from './redux/slices/cartSlice';
import {
  filterProducts,
  loadFilterProducts,
  sortingProducts,
} from './redux/slices/filterSlice';
import { getProducts } from './redux/slices/productSlice';
import { useCart, useFilter, useProduct } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const { cart } = useCart();
  const { sorting_value, filters } = useFilter();
  const { products } = useProduct();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartItemPriceTotal());
    localStorage.setItem('EchoCart', JSON.stringify(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortingProducts());
  }, [products, sorting_value, filters, dispatch]);

  useEffect(() => {
    dispatch(loadFilterProducts(products));
  }, [dispatch, products]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoFoundRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
