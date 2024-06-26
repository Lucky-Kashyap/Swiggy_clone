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

        <div className="w-full h-[206px] px-4 pb-4 bg-gradient-to-t from-slate-200/70 mt-3 rounded-[30px]">
          <div className="w-full h-full border border-slate-200/70 rounded-[30px]">
            <div className="p-4 w-full">
              <div className="flex items-center gap-1 font-semibold">
                <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                <span>{resInfo?.avgRating}</span>
                <span>({resInfo?.totalRatingString})</span>.
                <span>{resInfo?.costForTwoMessage}</span>
              </div>
              <p className="underline text-orange-600 font-semibold text-sm">
                {resInfo?.cuisines?.join(", ")}
              </p>

              <div className="flex gap-2">
                <div className="w-[9px] flex flex-col justify-center items-center">
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                  <div className="w-[1px] h-[25px] bg-gray-500"></div>
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-1 text-sm font-semibold">
                  <p>
                    Outlet .
                    <span className="text-gray-400 font-normal font-semibold">
                      {resInfo?.locality}
                    </span>
                  </p>

                  <p>{resInfo.sla?.slaString}</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="w-full">
              <div className="flex items-center p-4">
                <img
                  className="w-6"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${resInfo?.feeDetails?.icon}`}
                  alt="cycle"
                />
                {resInfo?.length !== 0 && (
                  <span>{resInfo?.expectationNotifiers[0]?.enrichedText}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
