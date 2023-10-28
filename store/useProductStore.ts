import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  products: any[];
  addAllProducts: (products: any) => void;
};


export const useProductStore = create(
  persist<State>(
    (set, get) => ({
      products: [],
      addAllProducts: (products: any) =>
        set((state) => ({ products: [...get().products, ...products] })),
    }),
    {
      name: "products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
