const RestaurantCard = (props) => {
  const { restObj } = props;
  console.log(restObj);
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
    restObj?.info;
  return (
    <>
      <div className="rest_container_body">
        <div className="LogoImgCont">
          <img alt="rest-img" src={cloudinaryImageId} />
        </div>
        <div className="card_content">
          <h2 style={{ margin: "5px 0px" }}>
            <span>{name}</span>
          </h2>
          <div class="restaurant-details">
            <span className="rating">
              {avgRating} <span>. {sla.slaString} Min</span>
            </span>
          </div>
          <span className="foods" style={{ display: "block" }}>
            {cuisines.join(", ")}
          </span>
          <span className="location">{areaName}</span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
