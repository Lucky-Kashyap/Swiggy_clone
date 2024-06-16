import React from "react";
import RestaurantCard from "./RestaurantCard";

function OnlineFoodDelivery({ data }) {
  return (
    <div>
      <h1 className="text-[#282c3f] text-4xl font-bold mt-10 mb-4">
        Restaurants with online food delivery in Delhi
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {data?.map((restaurant, index) => (
          <div
            key={index}
            className="hover:scale-95 duration-300 cursor-pointer"
          >
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;
