
import { useProductStore } from "@/store/useProductStore";
import React from "react";

const SellerAllProductClient = () => {
  const p=useProductStore.getState().products
  console.log(p,"heh")
  return <div></div>;
};

export default SellerAllProductClient;
