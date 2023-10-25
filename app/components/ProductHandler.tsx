"use client";
import { useStore } from "react-redux";
import { useRef } from "react";
import {  RootState, setProducts, useProducts } from "@/app/store/store";
import { Product } from "@/types/product";

export default function ProductHandler({
  products: initialProducts,
}: {
  products: Product[];
}) {
  const store = useStore<RootState>();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setProducts(initialProducts));
    initialized.current = true;
  }
  const products = useProducts();

  return (
    <>
    </>
    // <>
    //   {reviews && reviews?.length && (
    //     <div className="mt-4 font-light">
    //       Average Rating:{" "}
    //       {(
    //         reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
    //       ).toFixed(1)}
    //     </div>
    //   )}
    // </>
  );
}
