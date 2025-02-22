import { useParams } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import CategoryList from "./CategoryList";
import { useState } from "react";

const RestaurantsMenu = () => {
  // const [restData, setrestData] = useState({});
  const { resId } = useParams();

  // console.log(resId, "------restid");

  const restData = useRestaurants(resId);

  console.log(restData, "-----restData");
  const [showIndexExpand, setshowIndexExpand] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, [resId]);

  // const fetchData = async () => {
  //   const data = await fetch(Menu_URL + resId);

  //   if (!data.ok) throw new Error("Failed to fetch data");

  //   const jsonData = await data.json();
  //   console.log(jsonData, "-----jsondata");

  // if (jsonData) {
  // setrestData(jsonData?.data?.cards);
  // }
  // console.log(restData, "----restdata");
  // const {} = restData?.data?.cards[4]?.groupedCard?.REGULAR?.cards;
  // console.log(RestName, "-----RestName");
  // };

  //   useEffect(() => {
  //   console.log(restData.length, "-----restDatarestData");
  //   if (restData.length > 0) {
  // console.log(restData[2]?.card?.card?.info, "-----resta11data");
  // console.log(name, "-----name");
  //   }
  //   }, [restData]);
  const { name } = restData[2]?.card?.card?.info || "unknown restaturants";

  //   console.log(restData[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,'-----red');
  console.log(
    restData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    "------red"
  );

  const Categories =
    restData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.["card"]?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(Categories, "------categories");

  return !restData ? (
    <h1 className="mt-2">Loading.......</h1>
  ) : (
    <div className="flex flex-col items-center mt-10 min-w-full">
      <h1 className="text-2xl font-bold tracking-tight leading-tight text-gray-800">
        {name}
      </h1>
      <div className="mt-2 w-[50%] bg-gray-50">
        <div>
          {Categories?.map((category, index) => (
            <CategoryList
              key={category?.card?.card?.categoryId}
              category_list={category?.card?.card}
              // expandTitle={index === 0 && true}
              // expandTitle={true}
              // expandTitle={false}
              expandTitle={index === showIndexExpand && true}
              setshowIndexExpand={() => setshowIndexExpand(index === showIndexExpand ? null : index)}
            />
          ))}

          {/* {restData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (dish) => (
                <li>{dish?.card?.info?.name}</li>
              )
            )} */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
