"use client"
import { useRef } from "react";
import { store } from "@/redux/store";
import { setProducts } from "@/redux/slices/productSlice";

export type ImageData = {
  public_id: string;
  imgSrc: string;
};

export type CreateProductType = {
  name: string;
  description: string;
  category: string;
  originalPrice: string;
  discountPrice: string;
  stock: string;
  images: ImageData[];
};

export type Seller = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  role: string;
  password: string;
  country: string;
  address: string;
  shopName: string;
  shopAddress: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  discountPrice: number;
  stock: number;
  seller: Seller;
  images: [ImageData];
  soldOut: number;
  createdAt: string;
  updatedAt: string;
};

type PreloaderProps = {
  products: Product[];
};

function Preloader({ products }: PreloaderProps) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setProducts(products));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
