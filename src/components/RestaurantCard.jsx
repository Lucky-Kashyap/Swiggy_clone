import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  // const {id}=useParams();

  // console.table(restaurant.info?.id);

  // console.log(id);
  // console.log(restaurant?.cta.link.split('/'));

  let link = restaurant?.cta?.link.split("/").at(4);

  return (
    <Link to={`/restaurantMenu/${link}`}>
      <div className="min-w-[295px] h-[182px] relative">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info.cloudinaryImageId}`}
          alt="restaurant-card"
        />
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl w-full h-full absolute top-0"></div>
        <p className="absolute bottom-0 text-white text-2xl ml-2 mb1 font-bold">
          {restaurant.info?.aggregatedDiscountInfoV3
            ? restaurant.info.aggregatedDiscountInfoV3?.header +
              " " +
              restaurant.info.aggregatedDiscountInfoV3?.subHeader
            : ""}
        </p>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{restaurant.info?.name}</h2>
        <p className="flex items-center gap-1 text-base font-semibold">
          <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
          {restaurant.info?.avgRating} .{" "}
          <span>{restaurant.info?.slaString}</span>
        </p>
        {/* <p>
                {restaurant.info?.cuisines.map((i, id) => (
                  <span key={id}>{i},</span>
                ))}
              </p> */}
        <p className="line-clamp-1 text-black/60 font-medium">
          {restaurant.info?.cuisines.join(", ")}
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {restaurant.info?.locality}
        </p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
