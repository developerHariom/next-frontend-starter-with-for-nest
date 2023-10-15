"use client";
import React from "react";
import { Checkbox } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { Star } from "lucide-react";

const ProductSidebar = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full gap-3 bg-white">
        <div className="flex flex-col gap-5 p-5 mt-3">
          {" "}
          <h1 className="font-bold text-center">Product Categories</h1>
          <hr></hr>
          <div className="flex flex-col gap-3">
            <Checkbox>Mobile & Laptop</Checkbox>
            <Checkbox>Electronics</Checkbox>{" "}
            <Checkbox>Home Appliances</Checkbox>{" "}
            <Checkbox>Stationery goods</Checkbox> <Checkbox>Gift Item</Checkbox>{" "}
            <Checkbox>Bikes Part</Checkbox> <Checkbox>Kids Fashion</Checkbox>{" "}
            <Checkbox>Mens Fashion</Checkbox>{" "}
            <Checkbox>Female Fashions</Checkbox>{" "}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-center ">Price Range</h1>
          <div className="p-4">
           Range Slider
          </div>
        </div>

        <div className="w-full">
          <h1 className="font-bold text-center ">Ratings</h1>
          <div className="flex flex-col gap-3 p-5">
            <Checkbox>
              <div className="flex gap-2">
                <Star color="orange" />
              </div>
            </Checkbox>
            <Checkbox>
              <div className="flex gap-2">
                <Star color="orange" />
                <Star color="orange" />
              </div>
            </Checkbox>
            <Checkbox>
              <div className="flex gap-2">
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
              </div>
            </Checkbox>
            <Checkbox>
              <div className="flex gap-2">
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
              </div>
            </Checkbox>

            <Checkbox>
              <div className="flex gap-2">
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
                <Star color="orange" />
              </div>
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
