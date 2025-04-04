import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantsMenu from "./components/RestaurantsMenu";


///Lazy Loading Done
const Grocery = lazy(() => import("./components/Grocery"));

const AboutUs = lazy(() => import("./components/AboutUs"));
const AppComponent = () => {
  // console.log(<BodyComp />);
  return (
    <>
      <div className="containerWidth " style={{ padding: "0px" }}>
        <HeaderComp />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/aboutus",
        element: (
          <Suspense
            fallback={<h1 style={{ marginTop: "120px" }}>Loading.....</h1>}
          >
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 style={{ marginTop: "120px" }}>Loading.....</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantsMenu />,
      },
    ],
  },
]);

const ReactDom = ReactDOM.createRoot(document.getElementById("root"));

ReactDom.render(<RouterProvider router={appRouter} />);
// ReactDom.render(<AppComponent />);
