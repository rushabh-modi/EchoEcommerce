import { useDispatch } from 'react-redux';

import { styled } from '../../styles';
import {
  clearFilters,
  updateFilterValue,
} from '../../redux/slices/filterSlice';
import FormatPrice from '../../components/utils/FormatPrice';
import { Button } from '../../styles/Button';
import { useFilter } from '../../redux/store';

const FilterSection = () => {
  const {
    filters: { text, category, company, price, maxPrice, minPrice },
    all_products,
  } = useFilter();
  const dispatch = useDispatch();

  const handleUpdateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateFilterValue({ name, value }));
  };

  const handleCategoryButtonClick = (item) => {
    dispatch(updateFilterValue({ name: 'category', value: item }));
  };

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((item) => {
      return item[attr];
    });

    return (newVal = ['all', ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            autoComplete="off"
            value={text}
            onChange={handleUpdateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={item}
                className={item === category ? 'active' : ''}
                onClick={() => handleCategoryButtonClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={handleUpdateFilterValue}
            value={company}
          >
            {companyData.map((item, index) => {
              return (
                <option key={index} value={item} name="company">
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleUpdateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={() => dispatch(clearFilters())}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      h3 {
        padding: 5rem 0px 1px;
      }
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
