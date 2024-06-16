import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [menuData, setMenuData] = useState([]);
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
      let menuCards = res?.data?.cards[0]?.card?.card?.text;
      setMenuData(menuCards);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div>
      <h4>
        RestaurantMenu {idSplit} {menuData}
      </h4>
    </div>
  );
}

export default RestaurantMenu;
