import { useState } from "react";
import LogoImg from "../utils/constant";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [BtnChange, setBtnChange] = useState("Login");
  return (
    <>
      <div className="container header_top">
        <div className="header">
          <div className="logoCont">
            <img className="Logo" src={LogoImg} />
          </div>

          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>Cart</li>
              <li>
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
