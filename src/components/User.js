import React, { useState } from "react";

const User = ({name, location, contact}) => {
const [count] = useState(0)
const [count2] = useState(2)

  return (
    <div className="user-card">
        <h2>count: {count} </h2>
        <h2>count2: {count2} </h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
