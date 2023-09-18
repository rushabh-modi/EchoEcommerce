import { useContext } from "react";
import FilterContext from "../context/FilterProvider";

const useFilterContext = () => {
  return useContext(FilterContext);
};

export default useFilterContext;
