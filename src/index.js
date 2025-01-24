import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";

const AppComponent = () => {
  // console.log(<BodyComp />);
  return (
    <>
      <div className="containerWidth ">
        <HeaderComp />
        <BodyComp />
      </div>
    </>
  );
};

const ReactDom = ReactDOM.createRoot(document.getElementById("root"));

ReactDom.render(<AppComponent />);
