import React from "react";
import Slider from "./Slider";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-4 overflow-hidden">
        <Slider />
        <TopRestaurant />
      </div>
    </div>
  );
};

export default Body;
