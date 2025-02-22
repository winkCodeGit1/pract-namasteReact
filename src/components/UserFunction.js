import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const UserFunction = ({ name }) => {
  const [count, setCount] = useState(0);

  const { loggedInUser } = useContext(UserContext);
  ///all scanrios of useffect is

  //   useEffect(() => {
  //     console.log("useEffect is called");
  //   });

  // useEffect(() => {
  //     console.log("useEffect is called");
  //   },[]);

  useEffect(() => {
    console.log("useEffect is called");
  }, [count]);

  //   useEffect(() => {
  //     console.log("useEffect is called");

  //     return () => {
  //       console.log(
  //         "when unmount the component then it is called like componentWillUnmount() in class based components"
  //       );
  //     };
  //   }, [count]);

  return (
    <>
      <div className="flex flex-col items-center text-pretty border-spacing-3 border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-all">
        <h1>Count: - {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>Name:- {name}</p>
        <p>Address:- At-Kuansh,PO-Bhadrak,PS-Bhadrak,pin-756100</p>
        <p>Email Id:- sumandas1200@gmail.com</p>
        <p>
          Logged User: - <span className="font-bold text-xl">{loggedInUser}</span>
        </p>
      </div>
    </>
  );
};

export default UserFunction;
