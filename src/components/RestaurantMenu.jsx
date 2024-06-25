import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RestaurantMenu() {
  const [menuData, setMenuData] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [discountData, setDiscountData] = useState([]);

  const { id } = useParams();

  // console.log(id.split('-')[-1]);

  const idSplit = id.split("-").at(-1);

  async function fetchMenu() {
    try {
      let data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=${idSplit}&catalog_qa=undefined&submitAction=ENTER`
      );
      let res = await data.json();
      // console.log(res);
      // console.log(res?.data?.cards[2]?.card?.card?.info);

      let menuCards =
        res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card;

      // console.log(menuCards);

      setResInfo(res?.data?.cards[2]?.card?.card?.info);
      setDiscountData(
        res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
      setMenuData(menuCards);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-8">
        <p className="text-[12px] text-slate-500">
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              Home
            </span>
          </Link>
          /
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {resInfo?.city}
            </span>
          </Link>
          /
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {resInfo?.name}
            </span>
          </Link>
        </p>
        <h1 className="font-bold pt-6 text-2xl">{resInfo?.name}</h1>

        <div className="w-full h-[206px] p-5 bg-gradient-to-t from-slate-200/70 mt-3 rounded-[30px]">
          <div className="w-full h-full border border-slate-200/70 p-4 rounded-[30px]">
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
