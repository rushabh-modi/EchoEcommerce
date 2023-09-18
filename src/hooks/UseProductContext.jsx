import { useContext } from "react";
import ProductContext from "../context/ProductProvider";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
