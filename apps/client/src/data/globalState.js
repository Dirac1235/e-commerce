
import { create } from "zustand";

export const useGlobalState = create((set) => ({
  products: [],
  categories: [],
  users: [],
  searchQuery: "",
  
  setSearchQuery: (searchQuery) =>
    set((state) => {
      const newState = { ...state, searchQuery };
      return newState;
    }),
  setProducts: (products) =>
    set((state) => {
      return { ...state, products };
    }),
  setCatagories: (categories) =>
    set((state) => {
      return { ...state, categories };
    }),
  setUsers: (users) =>
    set((state) => {
      return { ...state, users };
    }),
}));