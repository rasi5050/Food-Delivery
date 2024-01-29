import React from "react";
const LazyLoadingComponent = () => {
  return (
    <div className="mx-24 px-5 py-3  my-8">
  <h2>This is a lazy loaded component</h2><h3>This should be loaded as a separate bundle if you see the JS files in the network calls</h3>
  </div>
  );
};

export default LazyLoadingComponent;
