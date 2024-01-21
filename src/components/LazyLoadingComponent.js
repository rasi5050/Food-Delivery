import React from "react";
const LazyLoadingComponent = () => {
  return <><h2>This is a lazy loaded component</h2><h3>This should be loaded as a separate bundle if you see the JS files in the network calls</h3></>;
};

export default LazyLoadingComponent;
