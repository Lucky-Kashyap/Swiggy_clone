import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelivery from "./OnlineFoodDelivery";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();

      const cards =
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const slider = res?.data?.cards[0]?.card?.card?.imageGridCards?.info;

      setTopRestaurantData(cards);
      setSliderData(slider);
      // console.log(cards);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-4 overflow-hidden">
        <Slider data={sliderData} />
        <TopRestaurant data={topRestaurantData} />
        <OnlineFoodDelivery data={topRestaurantData} />
      </div>
    </div>
  );
};

export default Body;
