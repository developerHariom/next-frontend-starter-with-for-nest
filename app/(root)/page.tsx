import HomeComponent from "@/components/Home";
import { getClient } from "@/lib/client";
import { GetAllProductsDocument } from "@/graphql/generated/schema";
import { Product } from "@/types/product";
import { ThemeSwitch } from "@/components/Utilities/theme-switch";
import { useProductStore } from "@/store/useProductStore";
import ProductInitializer from "../../components/ProductInitializer";
export const dynamic = "force-dynamic";
export const getAllProducts = async () => {
  const { data } = await getClient().query<{ getAllProducts: Product[] }>({
    query: GetAllProductsDocument,
  });

  return data?.getAllProducts;
};
export default async function Home() {
  const data = await getAllProducts();
  if(data){
    useProductStore.setState({
      products: data,
    });
  
  }
 
 
  return (
    <>
      <ProductInitializer products={data} />
      <ThemeSwitch />
      <HomeComponent products={data} />
    </>
  );
}
