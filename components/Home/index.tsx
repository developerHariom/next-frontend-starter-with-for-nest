import React from "react";
import Carousel from "../Carousel";
import Brands from "./Brands";
import NewArrivals from "./NewArrival";
import Banner from "../Utilities/Banner";
import GamerWorld from "./GamerWorld";
import Sales from "../Utilities/Sales";
import PopularSales from "./PopularSales";
import { getClient } from "@/lib/client";
import { GetAllProductsDocument } from "@/graphql/generated/schema";

const HomeComponent = async () => {
  
  return (
    <div>
      <Carousel />
      <Brands />
      <NewArrivals />
      <Banner />
      <GamerWorld />
      <Sales />
      <PopularSales />
    </div>
  );
};

export default HomeComponent;
