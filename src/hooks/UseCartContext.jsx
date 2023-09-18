import { useContext } from "react";
import CartContext from "../context/CartProvider";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
