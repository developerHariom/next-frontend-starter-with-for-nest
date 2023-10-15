"use client";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Expand, GitCompare, Heart } from "lucide-react";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <Card
      className="w-full h-[400px] rounded-none relative mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-0 z-10 flex flex-col items-center gap-3 p-3 right-1">
          <div className="p-2 bg-blue-100 rounded-full hover:cursor-pointer">
            <Expand size={18} className="text-blue-500" />
          </div>
          <div className="p-2 bg-red-100 rounded-full hover:cursor-pointer">
            <Heart size={18} className="text-red-500" />
          </div>
          <div className="p-2 bg-green-100 rounded-full hover:cursor-pointer">
            <GitCompare size={18} className="text-green-500" />
          </div>
        </div>
      )}
      <div className="relative w-full h-full pb-0 ">
        <div className="relative w-40 h-40 m-auto mt-10">
          <Image
            src="/img/headright.png"
            alt="product"
            sizes="100vw"
            fill
            objectFit="cover"
          />
        </div>
        <CardFooter className="relative flex flex-col h-full gap-3 p-5 pb-0 mt-4">
          <div className="w-full">
            <ReactStars
              count={5}
              onChange={() => {
                console.log("de");
              }}
              color="#D83F31"
              size={15}
              activeColor="#ffd700"
            />
          </div>

          <h1 className="w-full font-bold break-words">
            <Link href={"/product/sdfsd"} className="hover:text-blue-500">
              Acer Nitro 5 2023 Model 8-gbram,256gb storage
            </Link>
          </h1>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {isHovered && (
              <Button className="w-full px-2 py-1 mt-2 text-white bg-blue-500 rounded-md">
                Add to Cart
              </Button>
            )}
          </motion.div>

          <div className="flex w-full gap-3">
            <motion.section
              initial={{ opacity: 1 }}
              animate={{
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className={`line-through font-bold text-xl text-gray-400 ${
                isHovered ? "hidden" : ""
              }`}
            >
              Rs 400
            </motion.section>
            <motion.section
              initial={{ opacity: 1 }}
              animate={{
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className={`text-rose-500 text-xl font-bold ${
                isHovered ? "hidden" : ""
              }`}
            >
              Rs 500
            </motion.section>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
