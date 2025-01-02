import LogoImg from "../utils/constant";

const HeaderComp = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logoCont">
            <img className="Logo" src={LogoImg} />
          </div>

          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
