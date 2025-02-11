import { useEffect, useState } from "react";
import { Menu_URL } from "./constriants";

const useRestaurants = (resId) => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchData(resId);
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);

    if (!data.ok) throw new Error("Failed to fetch data");

    const jsonData = await data.json();
    console.log(jsonData, "-----jsondata");

    setResInfo(jsonData?.data?.cards);
    // const {} = restData?.data?.cards[4]?.groupedCard?.REGULAR?.cards;
    // console.log(RestName, "-----RestName");
  };

  return resInfo;
};

export default useRestaurants;
