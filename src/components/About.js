import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Rasi"} location={"New York"} contact={"rasi01@syr.edu"}/> */}
            <UserClass name={"Rasi"} location={"New York"} contact={"rasi01@syr.edu"}/>
        </div>
    );
};

export default About;