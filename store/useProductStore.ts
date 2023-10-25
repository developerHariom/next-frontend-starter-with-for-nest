import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  products: any[];
};

interface Actions {
  addAllProducts: (products: any) => void;
}
export const useProductStore = create(
  persist<State>(
    (set, get) => ({
      products: [],
      addAllProducts: (products: any) =>
        set((state) => ({ products: [...state.products, ...products] })),
    }),
    {
      name: "products",
      partialize: (state) => ({
        products: state.products,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);
