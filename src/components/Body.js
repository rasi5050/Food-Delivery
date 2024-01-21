import React, { useEffect } from "react";
import { useState } from "react";

import RestaurantCard from "./restaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // useState hook need to be used inside the component
  // + in below syntax, the "restaurants" is the list,
  // "setListOfRestaurants" is the functional to set the list to "restaurants", cannot modify normally
  // initialized with empty list

  let [restaurants, setRestaurants] = useState([]);

  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //   whenever state variable changes react triggers a reconciliation cycle(re-renders the component)
  let [searchText, setSearchText] = useState("");

  //useFetch is a hook that will be called after the component is rendered
  // first parameter is the callback function
  useEffect(() => {
    fetchData();
  }, []);

  // async await to fetch data from the API; await to resolve promise, will wait till data arrives
  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    // if it becomes undefined probably swiggy would have changed api structure
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(restaurants)
  // console.log(filteredRestaurants)
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) return (<h2>You are offline. Please check your internet connection</h2>)

  if (restaurants.length === 0 || filteredRestaurants.length === 0) return <Shimmer/>;

  // if (restaurants.length === 0 || filteredRestaurants.length === 0) return (<Shimmer/>)
  // return (restaurants === null || restaurants.length === 0) ? (
  //   <Shimmer />
  // ) : 
  return (
    <div className="body" onScroll={() => {}}>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search"
            onClick={() => {
              const filteredRes = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurants(filteredList);
        
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          //error: link is used to dynamically load individual restaurant pages, but some of them is not working
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
        {/* {restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)} */}
        {/* {restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)} */}
      </div>
    </div>
  );
};

export default Body;
