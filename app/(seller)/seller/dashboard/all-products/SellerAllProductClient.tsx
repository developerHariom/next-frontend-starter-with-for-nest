"use client"
import { useProductStore } from "@/store/useProductStore";
import React from "react";

const SellerAllProductClient = () => {
  return (
    <>
      {console.log(useProductStore.getState().products)}
      <p>{useProductStore.getState().products[0]?.name}ss</p>
    </>
  );
};

export default SellerAllProductClient;
