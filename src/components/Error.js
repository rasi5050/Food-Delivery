import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex mx-24 px-5 py-3  my-8 items-center justify-center h-screen">
      <div className="items-center">
        <h1 className="text-6xl font-semibold truncate">Oops!!!</h1>
        <h2 className="text-2xl font-semibold truncate">
          Something went wrong!!
        </h2>
        <h3>
          {err.status}: {err.statusText}
        </h3>
      </div>
      </div>
  );
};

export default Error;
