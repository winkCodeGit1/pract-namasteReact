import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ display: "flex", alignItems: "center",flexDirection:'column' }}>
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <h1>{err.data}</h1>
    </div>
  );
};

export default Error;
