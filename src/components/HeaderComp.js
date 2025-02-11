import { useState } from "react";
import { LogoImg } from "../utils/constriants";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [BtnChange, setBtnChange] = useState("Login");

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
              <li className="px-4">Cart</li>
              <li className="px-4">
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
