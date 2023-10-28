"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
const Carousel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-[20rem] sm:h-[30rem] md:h-[40rem]  w-full"
    >
      <SwiperSlide>
        <Image
          src={
            "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3405&q=80"
          }
          sizes="100vw"
          height={0}
          width={0}
          alt="carousel"
          fill
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={
            "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          }
          sizes="100vw"
          height={0}
          width={0}
         fill
          alt="carousel"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
