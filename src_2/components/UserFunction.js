import { useEffect, useState } from "react";

const UserFunction = ({ name }) => {
  const [count, setCount] = useState(0);

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
      <div className="card">
        <h1>Count: - {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>Name:- {name}</p>
        <p>Address:- At-Kuansh,PO-Bhadrak,PS-Bhadrak,pin-756100</p>
        <p>Email Id:- sumandas1200@gmail.com</p>
      </div>
    </>
  );
};

export default UserFunction;
