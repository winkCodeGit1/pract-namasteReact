import { useState, useContext } from "react";
import { LogoImg } from "../utils/constriants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const HeaderComp = () => {
  const [BtnChange, setBtnChange] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store by using selector
  const cartSelector = useSelector((store) => store.cart.items);

  console.log(cartSelector, "------cartselector");

  const CartIcon = ({ itemCount }) => {
    return (
      <div className="relative inline-block">
        {/* Cart Icon (Pure CSS) */}
        <div className="w-5 h-5 border-2 border-gray-700 rounded-md flex items-center justify-center">
          <div className="w-2 h-2 border-b-2 border-r-2 border-gray-700 transform rotate-45"></div>
        </div>

        {/* Badge (Shows item count) */}
        {itemCount > 0 && (
          <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {itemCount}
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="p-4 shadow-lg">
        <div className="flex justify-between">
          <div className="logoCont">
            <img className="w-28" src={LogoImg} />
          </div>

          <div className="flex items-center">
            <ul className="flex justify-between">
              <li className="px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="px-4 font-bold text-xl">
                <Link to="/cart">
                  <CartIcon itemCount={cartSelector.length} /> Cart
                </Link>
              </li>
              <li className="px-4">
                <p className="font-bold text-xl">{loggedInUser}</p>
                <button
                  className="loginBtn"
                  onClick={() => {
                    BtnChange === "Login"
                      ? setBtnChange("Logout")
                      : setBtnChange("Login");
                  }}
                >
                  {BtnChange}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
