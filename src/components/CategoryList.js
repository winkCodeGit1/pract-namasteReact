import React, { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = ({ category_list, expandTitle, setshowIndexExpand }) => {
  console.log(category_list, "----category_list");
  // const [openCategory, setOpenCategory] = useState(null);
  // const [expandTitle, setexpandTitle] = useState(false);

  // Toggle function for accordion
  // const toggleCategory = (id) => {
  const toggleCategory = () => {
    // setOpenCategory(openCategory === id ? null : id);
    // setexpandTitle(!expandTitle);
    setshowIndexExpand();
  };

  return (
    <div className="space-y-5 mb-[0.2px] shadow border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-all">
      <div>
        <button
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-700 focus:outline-none"
          // onClick={() => toggleCategory(category_list?.categoryId)}
          onClick={toggleCategory}
        >
          <span>
            {category_list?.title}({category_list?.itemCards?.length})
          </span>
          <span
            className={`transform transition-transform duration-300 ${
              expandTitle ? "rotate-180" : "rotate-0"
            }`}
          >
            &#9660;
          </span>
        </button>

        <div
          className={`transition-all overflow-auto duration-300 ${
            expandTitle ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mt-2 space-y-2">
            {category_list?.itemCards?.map((itmCrd) => (
              <ItemList
                key={itmCrd?.card?.info?.id}
                item_list={itmCrd?.card?.info}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
