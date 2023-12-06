import ProductInitializer from "@/components/ProductInitializer";
import { GetAllProductsDocument } from "@/graphql/generated/schema";
import { getClient } from "@/lib/client";
import { useProductStore } from "@/store/useProductStore";
import { Product } from "@/types/product";
import React from "react";
export const getAllProducts = async () => {
  const { data } = await getClient().query<{ getAllProducts: Product[] }>({
    query: GetAllProductsDocument,
  });

  return data?.getAllProducts;
};
const SellerDashboard = async () => {
  const data = await getAllProducts();
  useProductStore.setState({
    products: data,
  });

  return (
    <div className="text-black">
      <ProductInitializer products={data} />
      seller Dashboard
    </div>
  );
};

export default SellerDashboard;
