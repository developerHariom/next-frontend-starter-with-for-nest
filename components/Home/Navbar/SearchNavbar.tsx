import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";

const SearchNavbar = () => {
  return (
    <div className="items-center hidden p-3 pl-0 pr-0 sm:flex md:flex lg:flex">
      <div className="w-[70%] m-auto flex justify-between items-center">
        <div>
          <Image src={"/img/logo-3.svg"} alt="logo" height={100} width={100} />
        </div>

        <div className="relative w-1/2">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-lg"
            placeholder="Search products..."
          />
          <Search className="absolute text-gray-400 left-3 top-3" />
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
            <Heart size={20}/>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
            <UserCircle2 size={20} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 hover:cursor-pointer">
            <Link href={"/cart"}>
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
