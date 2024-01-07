import React from "react";


// useState is used to create state variable using hooks
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams()
    console.log(resId)

    // in useEffect, if [] not given, it will trigger every time the component rerenders
    useEffect(() => {
        fetchMenu();
        }, [])

    const fetchMenu = async () => {
        
        
        const data = await fetch(MENU_API_URL+resId)
        const json = await data.json();
        
        setResInfo(json.data);
        // console.log(json.data);
        // console.log(resInfo);
        
    } 

    if (resInfo === null) return (<Shimmer/>) 

    // this line cannot be made to previous line, because setResInfo behaves asynchronously and it will not have data,
    // hence this if condition prevents the null value in it
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards)
    return (  
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} </p>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs: {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
            </ul>

        </div>
    );
};

export default RestaurantMenu;