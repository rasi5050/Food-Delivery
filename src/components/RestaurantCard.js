import React from "react";

import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { restaurant } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurant?.info;
    const { deliveryTime} = restaurant?.info?.sla;
    return (
      <div className="flex flex-col w-64 min-h-full bg-white rounded-lg overflow-hidden ">
        <img
          className="w-full h-48 object-cover"
          alt={name}
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <p className="text-sm text-gray-800">{cuisines.join(", ")}</p>
          <div className="mt-2">
            <p className="text-sm text-gray-800">{avgRating} stars</p>
            <p className="text-sm text-gray-800">{deliveryTime} minutes</p>
          </div>
        </div>
      </div>
    );
  };
// higher order component for promoted label

// not using because promoted was not found in json response
export const withPromotedLabel = (RestaurantCard) => {
return (props) => {
  return(
    <div>
      <label>
        Promoted
      </label>
      <RestaurantCard {...props}/>
    </div>
  );
};
};

  export default RestaurantCard;