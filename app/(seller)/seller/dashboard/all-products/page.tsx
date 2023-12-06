import React from "react";
import SellerAllProductClient from "./SellerAllProductClient";
import { getClient } from "@/lib/client";
import { Product } from "@/types/product";
import { GetAllProductsDocument } from "@/graphql/generated/schema";
import { useProductStore } from "@/store/useProductStore";
import ProductInitializer from "@/components/ProductInitializer";

const page = async () => {
  return (
    <>
      <SellerAllProductClient />
    </>
  );
};

export default page;
