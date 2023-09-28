import { useSelector } from 'react-redux';
import styled from 'styled-components';

import FilterSection from '../features/filter/FilterSection';
import ProductList from '../features/filter/ProductList';
import Sort from '../features/filter/Sort';
import { LoadingSpinner } from '../components/utils/LoadingSpinner';

const Products = () => {
  const { isLoading } = useSelector((store) => store.product);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
