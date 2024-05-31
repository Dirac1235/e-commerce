"use client";
import { UserData } from '@app/client/data/admindata/userdata';
import { useEffect } from 'react';
import { create } from "zustand";

export const useGlobalState = create((set) => ({
  products: [],
  categories: [],
  users: [],
  setProducts: (products) =>
    set(() => {
      return { products };
    }),
  setCatagories: (categories) =>
    set(() => {
      return { categories };
    }),
  setUsers: (users) =>
    set(() => {
      return { users };
    }),
}));

export const DataProvider = ({ products, categories }) => {
  const globalState = useGlobalState();
  useEffect(() => {
    globalState.setProducts(products);
    globalState.setCatagories(categories)
    
  }, [products]);

  return <></>;
};


