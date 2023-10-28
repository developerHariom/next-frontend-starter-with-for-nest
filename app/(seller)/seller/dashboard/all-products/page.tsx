

import React from "react";
import SellerAllProductClient from "./SellerAllProductClient";
import { getClient } from "@/lib/client";
import { Product } from "@/types/product";
import { GetAllProductsDocument } from "@/graphql/generated/schema";
import { useProductStore } from "@/store/useProductStore";

export const getAllProducts = async () => {
  const { data } = await getClient().query<{ getAllProducts: Product[] }>({
    query: GetAllProductsDocument,
  });

  return data?.getAllProducts;
};
const page = async() => {
   const data = await getAllProducts();
   if (data) {
     useProductStore.setState({
       products: data,
     });
   }
  return <>
  <SellerAllProductClient/>
  </>
};

export default page;
