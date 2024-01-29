import React from "react";
import { ABOUT_US_IMAGE_URL } from "../utils/constants";
const Contact = () => {
    return (
        <div className="mx-24 px-5 py-3  my-8">
      
        <div className="flex space-x-8">
          <div className="w-1/2  space-y-4">
          <h1 className="text-2xl font-semibold truncate">Get in Touch</h1>
          <h3>Rasi</h3>
          <h3>New York</h3>
          <h3>rasi01@syr.edu</h3>
          </div>
          <img
          className="object-cover w-1/2 rounded-lg shadow-lg"
            src={ABOUT_US_IMAGE_URL}
            alt="First restaurant in the world"
          />
        </div>
      </div>
        // <div>
        //     <h1>Contact us page</h1>
        //     <h1>About</h1>
        //     <h2>This is Namaste React Web Series</h2>
        //     <h3> name={"Rasi"} location={"New York"} contact={"rasi01@syr.edu"}</h3>
        // </div>

    )
}

export default Contact