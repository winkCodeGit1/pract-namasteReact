import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor render");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount render");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount when we unmount the parent component");
  }

  render() {
    console.log("parent REnder method called");
    return (
      <>
        <div
          className="mt-2"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column-reverse",
          }}
        >
          <h2 className="text-xl text-amber-950 text-bold mb-[23px]">About Us</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-20 items-center justify-center">
          <UserClass
            name={"Suman Saurav Das (Class) First"}
            email={"sumandas1200@gmail.com"}
          />
          {/* <UserClass
            name={"Suman Saurav Das (Class) Second"}
            email={"sumandas1200@gmail.com"}
          /> */}

          {/* <UserClass
            name={"Suman Saurav Das (Class) Second"}
            email={"sumandas1200@gmail.com"}
          /> */}

          <UserFunction
            name={"Suman Saurav Das (Function)"}
            email={"sumandas1200@gmail.com"}
          />
        </div>
      </>
    );
  }
}

export default AboutUs;
