import React, { useState } from "react";

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
          <div className="min-w-[295px] h-[182px] relative" key={index}>
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info.cloudinaryImageId}`}
              alt="restaurant-card"
            />
            <div className="bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl w-full h-full absolute top-0"></div>
            <p className="absolute bottom-0 text-white text-2xl ml-2 mb1 font-bold">
              {restaurant.info.aggregatedDiscountInfoV3?.header +
                " " +
                restaurant.info.aggregatedDiscountInfoV3?.subHeader}
            </p>
          </div>
        ))}
      </div>

      <hr className="border mt-4" />
    </div>
  );
};

export default TopRestaurant;
