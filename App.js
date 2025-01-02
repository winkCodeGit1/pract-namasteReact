import React from "react";
import ReactDOM from "react-dom/client";

// const headingReact = React.createElement("h1", { id: "heading" }, "Hi,Suman head go for interview prep for react!");

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1 tag"),
//     React.createElement("h1", {}, "i am h1 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "i am h2 tag"),
//     React.createElement("h1", {}, "i am h2 tag"),
//   ]),
// ]);

///jsx code

// const rootReact = ReactDOM.createRoot(document.getElementById('root'));

// rootReact.render(parent);

///jsx code which is at the end a react element
const jsxHeading = <h1>Hi Suman, using jsx code </h1>;

// React component

//Both are same javascript  fundtions
// const fn = () => true;
// const fn2 = () => {
//   return true;
// };

//This is how to put a react element into another react element
const reactElem = <span>Hi Episode running is  - Laying the foundation</span>;
const HeadingComp3 = (
  <>
    {reactElem}
    <h2>Do Hard work for 30LPA salary</h2>
  </>
);

const HeadingComp = () => {
  return <h1>React practical on air</h1>;
};

///This process called component composition
const Headingcomp2 = () => (
  <>
    {HeadingComp3}
    <HeadingComp />
    {HeadingComp()}
    <HeadingComp></HeadingComp>
    <h1>Prepare for interview practical</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); - react element
//calling a react component
root.render(<Headingcomp2 />);
