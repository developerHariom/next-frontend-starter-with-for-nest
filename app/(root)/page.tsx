import HomeComponent from "@/components/Home";
import Preloader from "@/components/Preloader";
import { ThemeSwitch } from "@/components/Utilities/theme-switch";
import { GetAllProductsDocument } from "@/graphql/generated/schema";
import { getClient } from "@/lib/client";
import { setProducts } from "@/redux/slices/productSlice";
import { store } from "@/redux/store";

import { Product } from "@/types/product";
export const dynamic = "force-dynamic";

export const getAllProducts = async () => {
  const { data } = await getClient().query<{ getAllProducts: Product[] }>({
    query: GetAllProductsDocument,
  });

  return data?.getAllProducts;
};

export default async function Home() {
  const data = await getAllProducts();
  store.dispatch(setProducts(data));
  return (
    <>
      <Preloader products={data} />
      <ThemeSwitch />
      <HomeComponent />
    </>
  );
}
