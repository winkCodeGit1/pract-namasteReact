import React from "react";

const ItemList = ({ item_list }) => {
  return (
    <>
      <li className="relative flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
          {item_list?.name}
        </div>

        {/* Food Details (Centered Left) */}
        <div className="flex-1">
          <p className="text-md font-bold text-green-600 mt-6">
            ₹{item_list?.defaultPrice / 100 || item_list?.price / 100}
          </p>
          <p className="text-sm text-gray-600 mt-1">{item_list?.description}</p>
        </div>

        {/* Food Image */}
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item_list?.imageId
          }
          //   src={item_list?.imageId}
          alt={item_list?.category}
          className="w-24 h-24 rounded-lg object-cover ml-4"
        />
      </li>
    </>
  );
};

export default ItemList;
