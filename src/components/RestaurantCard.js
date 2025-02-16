import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCard = (props) => {
  console.log(props, "-----props");
  const { restObj } = props;
  // console.log(restObj);
  const { name, avgRating, cuisines, areaName, sla } = restObj;

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-4 h-[40vh]">
        {/* Image Container */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            alt="rest-img"
            className="w-full h-full rounded-lg object-cover"
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/` +
              restObj?.cloudinaryImageId
            }
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>

          {/* Restaurant Details */}
          <div className="flex items-center text-gray-600 text-sm space-x-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
              {avgRating} ★
            </span>
            <span>{sla?.slaString} Min</span>
          </div>

          {/* Cuisines */}
          <span className="block text-gray-500 text-sm mt-1">
            {cuisines?.join(", ")}
          </span>

          {/* Location */}
          <span className="block text-gray-400 text-xs mt-1">{areaName}</span>
        </div>
      </div>
    </>
  );
};

//This is a higher order function

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log('higher order function');
    return (
      <>
        <label className="px-4 absolute bg-green-700 text-white">Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
