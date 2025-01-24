import { useState, useEffect } from "react";
// import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComp = () => {
  //This is called array destructuring
  // const [listofRest, setListofRest] = useState(resObj);
  const [listofRest, setListofRest] = useState([]);
  const [filteredSearch, setfilteredSearch] = useState([]);
  const [searchText, setsearchText] = useState([]);

  //Whenever state variables update, react triggers a reconcilation cycle (re-renders the component)
  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      "----swiggy"
    );
    //optional chaininig
    setListofRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredSearch(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (listofRest.length === 0) {
  //   return <Shimmer />;
  // }
  return listofRest.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container mt-2">
        <div className="container search_bar">
          {/* <span className="search">Search</span>&nbsp; */}
          <div>
            <input
              type="text"
              name="searchBar"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
            <button
              onClick={() => {
                //Filter the restaurant card and update the UI
                //SearchText
                const filteredRest = listofRest.filter((obj) =>
                  obj.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setfilteredSearch(filteredRest);
              }}
            >
              Search
            </button>
          </div>
          <span className="button_res">
            <button
              className="swiggy-button"
              onClick={() => {
                const filterObj = listofRest.filter(
                  (obj) => obj.info.avgRating === 4.3
                );

                setListofRest(filterObj);
              }}
            >
              Top Rated Restaurant
            </button>
          </span>
        </div>
        <div className="rest_cards_container">
          {/* <RestaurantCard restObj={resObj} /> */}

          {filteredSearch.map((obj, index) => (
            <RestaurantCard key={obj.info.id} restObj={obj.info} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyComp;
