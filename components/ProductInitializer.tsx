"use client";
import { useProductStore } from "@/store/useProductStore";
import { useRef } from "react";

function ProductInitializer({ products }: any) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useProductStore.setState({
      products: products,
    });
    initialized.current = true;
  }
  return null;
}

export default ProductInitializer;
