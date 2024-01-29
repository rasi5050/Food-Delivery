import React from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import ToggleSwitch from "./ToggleSwitch";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
const cloudinaryImageId = resInfo?.cards[0].card.card.info.cloudinaryImageId
  if (resInfo === null) return <Shimmer />;

  // this line cannot be made to previous line, because setResInfo behaves asynchronously and it will not have data,
  // hence this if condition prevents the null value in it
  const { name, cuisines, costForTwoMessage } =
  // it was resInfo?.cards[0]?.card?.card?.info;
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
  // it was resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards)
  return (
    
    <div className="flex mx-24 px-5 py-3  my-8 space-y-4 ">
      <ToggleSwitch label="Veg Only" onChange={() => {console.log("printed using toggle switch")}}/>
    <div className="w-1/2  space-y-4">
      <h1 className="text-2xl font-semibold truncate">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <div className="text-m text-gray-600  text-justify">
      <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} </p>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <h2 className="text-xl font-semibold truncate">Menu</h2>
      <ul className="text-lg text-gray-600  text-justify">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs:{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

      </ul>
    </div>
    <img className="object-cover h-1/2 rounded-lg shadow-lg"
    alt={name}
    src={`${CDN_URL}${cloudinaryImageId}`}
  />
  </div>
  );
};

export default RestaurantMenu;
