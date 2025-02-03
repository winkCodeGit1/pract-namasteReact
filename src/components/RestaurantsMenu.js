import { useEffect, useState } from "react";

const RestaurantsMenu = () => {
  const [restData, setrestData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678"
      );

      const jsonData = await data.json();

      console.log(jsonData, "-----jsondata");
      setrestData(jsonData?.data);

      console.log(restData, "-----restadata");
    } catch (error) {
      console.log(error);
    }
    // const {} = restData?.data?.cards[4]?.groupedCard?.REGULAR?.cards;
    // console.log(RestName, "-----RestName");
  };
//   const { name: RestName } = restData?.data?.cards[2]?.card?.card?.info;
  return (
    <div className="mt-2">
      <h1>Restaurants Name: -</h1>
      <div>
        <h2>Menu List</h2>
        <div>
          <ul>
            <li>Biryani</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
