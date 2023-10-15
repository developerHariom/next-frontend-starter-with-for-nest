import { Calendar, ListOrdered, MessageCircle, Percent, Settings, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const SellerDashSIdebar = () => {
  return (
    <div className="h-screen p-4 bg-gray-800 rounded-lg">
      <div className="mb-5">
        <h1 className="p-5 text-2xl font-bold text-center text-white">
          SELLER DASHBOARD
        </h1>
      </div>
      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-blue-500 rounded hover:bg-blue-100 hover:text-black"
        >
          <ListOrdered size={24} color="#181ecd" />
          All Orders
        </Link>
      </div>
      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-red-500 rounded hover:bg-red-100"
        >
          <ShoppingCart size={24} color="#e00000" />
          All Products
        </Link>
      </div>
      <div className="mb-4">
        <Link
          href={"/seller/dashboard/product/create"}
          className="flex items-center gap-2 p-2 text-gray-500 rounded hover:bg-green-200 hover:text-black"
        >
          <ListOrdered color="#07ed17" size={24}  />
          Create Product
        </Link>
      </div>

      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-gray-500 rounded hover:bg-yellow-200 hover:text-black"
        >
          <Calendar color="red" size={24}  />
          All Events
        </Link>
      </div>
      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-gray-500 rounded hover:bg-blue-100 hover:text-black"
        >
          <MessageCircle color="red" size={24}  />
          Message Inbox
        </Link>
      </div>
      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-gray-500 rounded hover:bg-blue-100 hover:text-black"
        >
          <Percent color="red" size={24}  />
          Discount Coupon
        </Link>
      </div>
      <div className="mb-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 text-gray-500 rounded hover:bg-blue-100 hover:text-black"
        >
          <Settings color="red" size={24}  />
          Setting
        </Link>
      </div>
    
    </div>
  );
};

export default SellerDashSIdebar;
