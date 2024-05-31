import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export const useCart = create(
  persist(
    (set, get) => ({
      cartProducts: [],
      wishListLength: 0,
      increaseLength: () => set({ wishListLength: get().wishListLength + 1 }),

      addToCart: (product) => {
        const cp = get().cartProducts;
        const cartProducts = [...cp];
        const existingProduct = cartProducts.find((e) => e.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
          existingProduct.totalPrice =
            existingProduct.quantity * existingProduct.price;
        } else {
          product.quantity = 1;
          cartProducts.push(product);
        }
        set({ cartProducts });
      },

      removeFromCart: (id) => {
        const cp = get().cartProducts;
        const cartProducts = [...cp];
        const newCartProducts = cartProducts.filter((e) => e.id !== id);
        set({ cartProducts: newCartProducts });
      },
      // set
      addProductAmount: (id) => {
        const cp = get().cartProducts;
        const cartProducts = [...cp];
        const existingProduct = cartProducts.find((e) => e.id === id);
        if (existingProduct) {
          existingProduct.quantity = Math.max(existingProduct.quantity + 1, 1);
          existingProduct.totalPrice =
            existingProduct.quantity * existingProduct.price;
          set({ cartProducts });
        }
      },

      minusProductAmount: (id) => {
        const cp = get().cartProducts;
        const cartProducts = [...cp];
        const existingProduct = cartProducts.find((e) => e.id === id);
        if (existingProduct) {
          existingProduct.quantity = Math.max(existingProduct.quantity - 1, 1);
          existingProduct.totalPrice =
            existingProduct.quantity * existingProduct.price;

          console.log("exis", existingProduct, "cart", cartProducts);
          set({ cartProducts });
        }
      },
      clearCart: () => {
        const cartProducts = []
        set({cartProducts})
      }
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);


