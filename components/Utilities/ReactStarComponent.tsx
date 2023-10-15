"use client"
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReactStarComponent = () => {
  return (
    <ReactStars
      count={5}
      onChange={() => {
        console.log("de");
      }}
      size={20}
      activeColor="#ffd700"
    />
  );
};

export default ReactStarComponent;
