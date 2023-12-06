import { useProductStore } from "@/store/useProductStore";
import React from "react";

const Check = () => {
  const p = useProductStore.getState().products;
  console.log(p, "check page");
  return <div>sdf</div>;
};

export default Check;
