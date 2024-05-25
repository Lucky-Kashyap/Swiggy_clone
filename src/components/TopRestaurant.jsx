import React, { useEffect, useState } from "react";

const TopRestaurant = () => {
  const [data, setData] = useState([]);

  const [val, setVal] = useState(0);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();

      const cards =
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setData(cards);

      // console.log(cards);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          <div className="min-w-[295px] h-[182px]" key={index}>
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info.cloudinaryImageId}`}
              alt="restaurant-card"
            />
          </div>
        ))}
      </div>

      <hr className="border mt-4" />
    </div>
  );
};

export default TopRestaurant;
