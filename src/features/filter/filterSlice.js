import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadFilterProducts: (state, action) => {
      let priceArr = action.payload.map((item) => item.price);
      let maxPrice = Math.max(...priceArr);

      state.filter_products = [...action.payload];
      state.all_products = [...action.payload];
      state.filters.maxPrice = maxPrice;
      state.filters.price = maxPrice;
    },
    setGridView: (state, action) => {
      state.grid_view = true;
    },
    setListView: (state, action) => {
      state.grid_view = false;
    },
    sorting: (state, action) => {
      state.sorting_value = action.payload;
    },
    sortingProducts: (state, action) => {
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === 'lowest') {
          return a.price - b.price;
        }

        if (sorting_value === 'highest') {
          return b.price - a.price;
        }

        if (sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
      };
      let newSortData = tempSortProduct.sort(sortingProducts);

      state.filter_products = newSortData;
    },
    updateFilterValue: (state, action) => {
      const { name, value } = action.payload;

      state.filters[name] = value;
    },
    filterProducts: (state, action) => {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }

      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (item) => item.category === category
        );
      }

      if (company !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (item) => item.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (item) => item.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (item) => item.price <= price
        );
      }

      state.filter_products = tempFilterProduct;
    },
    clearFilters: (state, action) => {
      state.filters.text = '';
      state.filters.category = 'all';
      state.filters.company = 'all';
      state.filters.price = state.filters.maxPrice;
      state.filters.minPrice = 0;
    },
  },
});

export default filterSlice.reducer;
export const {
  setGridView,
  setListView,
  sorting,
  updateFilterValue,
  clearFilters,
  filterProducts,
  sortingProducts,
  loadFilterProducts,
} = filterSlice.actions;
