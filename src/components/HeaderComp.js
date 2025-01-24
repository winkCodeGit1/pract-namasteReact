import { useState } from "react";
import LogoImg from "../utils/constant";

const HeaderComp = () => {
  const [BtnChange, setBtnChange] = useState("Login");
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
