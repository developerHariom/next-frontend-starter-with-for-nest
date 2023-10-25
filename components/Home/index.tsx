import React from "react";
import Carousel from "../Carousel";
import Brands from "./Brands";
import NewArrivals from "./NewArrival";
import Banner from "../Utilities/Banner";
import GamerWorld from "./GamerWorld";
import Sales from "../Utilities/Sales";
import PopularSales from "./PopularSales";

const HomeComponent = async ({ products }: any) => {
  console.log(products,"homepp")
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
