import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const [restData, setrestData] = useState({});
  const { resId } = useParams();

  console.log(resId, "------restid");

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        resId
    );

    if (!data.ok) throw new Error("Failed to fetch data");

    const jsonData = await data.json();
    console.log(jsonData, "-----jsondata");

    // if (jsonData) {
    setrestData(jsonData?.data?.cards);
    // }
    console.log(restData, "----restdata");
    // const {} = restData?.data?.cards[4]?.groupedCard?.REGULAR?.cards;
    // console.log(RestName, "-----RestName");
  };

  //   useEffect(() => {
  //   console.log(restData.length, "-----restDatarestData");
  //   if (restData.length > 0) {
  // console.log(restData[2]?.card?.card?.info, "-----resta11data");
  // console.log(name, "-----name");
  //   }
  //   }, [restData]);
  const { name } = restData[2]?.card?.card?.info || "unknown restaturants";

  //   console.log(restData[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,'-----red');
  console.log(restData[4]?.groupedCard?.cardGroupMap?.Regular, "------red");

  return !restData ? (
    <h1 className="mt-2">Loading.......</h1>
  ) : (
    <div className="mt-2" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>Restaurants Name: - {name}</h1>
      <div>
        <h2>Menu List</h2>
        <div>
          <ul>
            {restData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (dish) => (
                <li>{dish?.card?.info?.name}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
