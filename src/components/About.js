import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { ABOUT_US_IMAGE_URL } from "../utils/constants";
const About = () => {
  return (
    <div className="mx-24 px-5 py-3  my-8">
      
      <div className="flex space-x-8">
        <div className="w-1/2  space-y-4">
        <h1 className="text-2xl font-semibold truncate">Who are we?</h1>
        <p className="text-lg text-gray-600  text-justify">
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple
          needs. Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out
          at restaurants. On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage and
          acquire customers to grow their business while also providing a
          reliable and efficient last mile delivery service. We also operate a
          one-stop procurement solution, Hyperpure, which supplies high quality
          ingredients and kitchen products to restaurant partners. We also
          provide our delivery partners with transparent and flexible earning
          opportunities.
        </p>
        </div>
        <img
        className="object-cover w-1/2 rounded-lg shadow-lg"
          src={ABOUT_US_IMAGE_URL}
          alt="First restaurant in the world"
        />
      </div>
    </div>
  );
};

export default About;
