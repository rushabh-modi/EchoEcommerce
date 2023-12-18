import GridView from './GridView';
import ListView from './ListView';
import { useFilter } from '../../redux/store';

const ProductList = () => {
  const { filter_products, grid_view } = useFilter();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
