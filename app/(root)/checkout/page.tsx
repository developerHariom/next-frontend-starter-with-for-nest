import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

const Checkout = () => {
  return (
    <div className="w-full lg:w-[80%] m-auto h-screen">
      <h1 className="p-5 text-2xl font-semibold text-center">Checkout</h1>
      <div className="flex flex-col justify-between w-full gap-3 lg:flex-row ">
        {/* CHECKOUT DETAIL SECTION */}
        <div className="lg:w-[50%] h-full  w-full m-auto lg:h-screen  p-5">
          <h1 className="p-5 text-2xl font-semibold ">Billing Details</h1>
          <div className="flex gap-3">
            <Input
              radius="none"
              placeholder="First Name"
              color="primary"
              size="lg"
              type="text"
            />
            <Input
              radius="none"
              placeholder="Last Name"
              size="lg"
              color="primary"
              type="text"
            />
          </div>
          <div className="flex gap-3 mt-5">
            <Input
              radius="none"
              placeholder="Email Address"
              color="primary"
              size="lg"
              type="email"
            />
            <Input
              radius="none"
              placeholder="Contact Number"
              size="lg"
              color="primary"
              type="number"
            />
          </div>
          <div className="flex gap-3 mt-5">
            <Input
              radius="none"
              placeholder="Address"
              color="primary"
              size="lg"
              type="text"
            />
            <Input
              radius="none"
              placeholder="ZipCode"
              size="lg"
              color="primary"
              type="text"
            />
          </div>
        </div>

        {/* PRODUCT SUMMARY SECTION */}
        <div className="w-full h-full lg:w-[50%] m-auto lg:h-screen p-5">
          <h1 className="p-5 text-2xl font-semibold ">Order Summary</h1>
          <div className="flex justify-between p-5">
            <h1>PRODUCTS</h1>
            <h1>TOTAL</h1>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
          </div>

          <hr />
          <div className="flex flex-col gap-4 p-5">
            <div className="flex justify-between">
              <p className="font-semibold">TOTAL</p>
              <p className="font-semibold">$56</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <label>Cash On Delivery</label>
            </div>
            <Button className="w-full text-white bg-black" radius="none">
              Place Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
