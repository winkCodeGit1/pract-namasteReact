import { useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComp = () => {
  //This is called array destructuring
  const [listofRest, setListofRest] = useState(resObj);

  return (
    <>
      <div className="container mt-2">
        <div className="container">
          <span className="search">Search</span>&nbsp;
          <span className="button_res">
            <button
              className="swiggy-button"
              onClick={() => {
                const filterObj = listofRest.filter(
                  (obj) => obj.info.avgRating > 4
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

          {listofRest.map((obj, index) => (
            <RestaurantCard key={obj.info.id} restObj={obj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyComp;
