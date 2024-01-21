import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// createBrowserRouter is a function in React Router used to define a set of routes for a web application, mapping URL paths to corresponding React components. RouterProvider is a component that takes the router instance created by createBrowserRouter and enables routing functionality in the application by wrapping the app or a part of it in the routing context.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// lazy loading
import { lazy, Suspense } from "react";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// lazy loading, the components will be loaded in a separate bundle
const LazyLoadingComponent = lazy(() =>
  import("./components/LazyLoadingComponent")
);

// client side v/s server side routing
// Client-side routing in React involves handling the navigation between different views within a single-page application directly in the browser, without making new requests to the server for each page change. Server-side routing, on the other hand, refers to the traditional method where navigation requests are processed by the server, which sends back a new page each time.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      // some of the resId is not being able to load its restaurant page, dont know the reason. but the resId is correct and if make separate API call it works
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/lazyLoadingComponent",
        element: (
          // fallback is the placeholder text while the original component is loaded, since rendering is fast, new bundle arrives later than required, hence fallback text will be displayed in between
          <Suspense fallback={<h2>Loading...</h2>}>
            <LazyLoadingComponent />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
