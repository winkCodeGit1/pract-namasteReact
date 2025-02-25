import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

///Lazy Loading Done
const Grocery = lazy(() => import("./components/Grocery"));

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppComponent = () => {
  // console.log(<BodyComp />);

  const [userName, setUserName] = useState("");
  ///authentication
  useEffect(() => {
    const data = {
      name: "Bemax_3838",
    };

    setUserName(data?.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="containerWidth " style={{ padding: "0px" }}>
            <UserContext.Provider value={{ loggedInUser: "Berserker" }}>
              <HeaderComp />
            </UserContext.Provider>
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const ReactDom = ReactDOM.createRoot(document.getElementById("root"));

ReactDom.render(<RouterProvider router={appRouter} />);
// ReactDom.render(<AppComponent />);
