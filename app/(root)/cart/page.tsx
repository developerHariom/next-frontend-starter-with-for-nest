import CartTable from "@/components/Cart/CartTable";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full lg:w-[80%] m-auto">
      <h1 className="p-5 text-2xl font-semibold text-center">Your Cart</h1>
      <CartTable />

      <div className="flex justify-between w-full pt-5 ">
        <div className="flex items-center ">
          <Input
            radius="none"
            className="bg-black border"
            placeholder="Discount code"
          />{" "}
          <Button radius="none" className="text-white bg-black">
            Apply
          </Button>
        </div>

        <Button radius="none">Continue Shopping</Button>
      </div>

      <div className="flex w-full ">
        <div className="flex flex-grow"></div>
        <div className="  justify-end w-[20%] h-full">
          <div className="flex justify-between w-full p-5">
            <h1 className="font-semibold text-medium">Subtotal</h1>
            <p>$56</p>
          </div>

          <div className="w-full p-5 ">
            <h1 className="font-semibold text-mediu">Shopping</h1>

            <div className="flex justify-between w-full mt-2">
              <h1 className="font-thin text-gray-500 text-medium">Delivery</h1>
              <p>$56</p>
            </div>
          </div>

          <div className="flex justify-between w-full p-5">
            <h1 className="font-semibold text-medium">Total</h1>
            <p>$56</p>
          </div>

          <Button className="w-full text-white bg-black" radius="none">
            <Link href={"/checkout"}>
            Proceed to Checkout
            </Link>
            
           
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
