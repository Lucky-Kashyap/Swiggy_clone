import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const TopRestaurant = ({ data }) => {
  const [val, setVal] = useState(0);

  const handlePrev = () => {
    setVal((prev) => prev - 50);
  };

  const handleNext = () => {
    setVal((prev) => prev + 50);
  };

  return (
    <div className="mt-14 w-full">
      <div className="flex justify-between mt-5">
        <h1 className="text-[#282c3f] text-4xl font-bold">
          Top restaurant chains in Delhi?
        </h1>
        <div className="flex gap-2">
          <div
            onClick={handlePrev}
            className={
              `rounded-full cursor-pointer w-8 h-8 flex justify-center items-center ` +
              (val <= 0 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                (val <= 0 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={
              `rounded-full cursor-pointer w-8 h-8 flex justify-center items-center ` +
              (val >= 124 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                (val >= 124 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
        </div>
      </div>
      <div
        style={{ translate: `-${val}%` }}
        className={`flex mt-4 gap-5 w-full duration-300`}
      >
        {data?.map((restaurant, index) => (
          <div className="hover:scale-95 duration-300 cursor-pointer">
            <RestaurantCard restaurant={restaurant} key={index} />
          </div>
        ))}
      </div>

      <hr className="border mt-4" />
    </div>
  );
};

export default TopRestaurant;
