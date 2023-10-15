import ProductCard from "@/components/Product/ProductCard";
import { ArrowRight } from "lucide-react";
import React from "react";
const GamerWorld = () => {
  return (
    <div>
      <section className="w-full md:w-[70%]  m-auto mt-10 ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Gamers World</h1>
          <div className="flex items-center ">
            View More <ArrowRight />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GamerWorld;
