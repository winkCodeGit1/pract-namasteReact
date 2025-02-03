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

  ///scroll call for the restaurants from swiggy api

  // const handleScroll = () => {
  //   // Detect when the user scrolls near the bottom of the page
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.body.offsetHeight - 50
  //   ) {
  //     fetchDataScroll();
  //   }
  // };

  // const fetchDataScroll = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           lat: 12.9352403,
  //           lng: 77.624532,
  //           nextOffset: "CJhlELQ4KICwhNi0l+2iCzCnEzgC",
  //           widgetOffset: {
  //             NewListingView_category_bar_chicletranking_TwoRows: "",
  //             NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //             Restaurant_Group_WebView_PB_Theme: "",
  //             Restaurant_Group_WebView_SEO_PB_Theme: "",
  //             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "24",
  //             inlineFacetFilter: "",
  //             restaurantCountWidget: "",
  //           },
  //           filters: {},
  //           seoParams: {
  //             seoUrl: "https://www.swiggy.com/restaurants",
  //             pageType: "FOOD_HOMEPAGE",
  //             apiName: "FoodHomePage",
  //           },
  //           page_type: "DESKTOP_WEB_LISTING",
  //           _csrf: "HJCwaFoTkCE9-qZqcNEhhJI6iHiK8TFE0Dg1e6zQ",
  //         }),
  //       }
  //     );

  //     console.log(response,'-----response')

  //   } catch (error) {
  //     console.log("error-----", error);
  //   }
  // };

  // useEffect(() => {
  //   // Attach the scroll listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return listofRest.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container mt-2">
        <div className="container search_bar">
          {/* <span className="search">Search</span>&nbsp; */}
          <div className="search-container">
            <input
              type="text"
              name="searchBar"
              className="search-field"
              placeholder="Search Here"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
            <button className="search-button"
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
                  (obj) => obj.info.avgRating === 3.9
                );

                console.log(filterObj,'---onclick');

                // setListofRest(filterObj);
                setfilteredSearch(filterObj);
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
