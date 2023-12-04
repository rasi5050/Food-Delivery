import React from "react";
import { useState } from "react"


import resList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";



const Body = () => {
    // useState hook need to be used inside the component 
    // + in below syntax, the "restaurants" is the list, 
    // "setListOfRestaurants" is the functional to set the list to "restaurants", cannot modify normally

    let [restaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(res => res.info.avgRating > 4 );
            setListOfRestaurants(filteredList);
            console.log(restaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
        {/* {restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)} */}
        {/* {restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)} */}
      </div>
    </div>
  );
};

export default Body;
