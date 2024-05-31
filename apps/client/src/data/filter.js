import { create } from "zustand";

export const useFilter = create((set) => ({
  filterByCategory: [],
  filterByPrice: { _min: null, _max: null },
  filterByName: "",

  addCategoryFilter: (filter) =>
    set((state) => {
        if (!state.filterByCategory.find((data) => data === filter)) {
            const newFilterByCategory = [...state.filterByCategory, filter];
            console.log(newFilterByCategory);

            return {
                ...state,
                filterByCategory: newFilterByCategory,
            };
        }
        else {
            const newFilterByCategory = state.filterByCategory.filter(item => item !== filter);
            console.log(newFilterByCategory);
            return {
                ...state,
                filterByCategory:newFilterByCategory
            }

           
        }
    }),

  addPriceFilter: (type, filter) =>
    set((state) => {
      state.filterByPrice = {
        ...state.filterByPrice,
        [type]: filter,
      };
      return state;
    }),
  addNameFilter: (filter) =>
    set((state) => {
      state.filterByName = filter;
      return state;
    }),
}));
