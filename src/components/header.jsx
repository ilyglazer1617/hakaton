import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import logo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/Logo.png";

function Header() {
  const to3D = () => {};
  return (
    <div className="headerwrap">
      <img className="logo" src={logo} alt="" />
      <Link className="headLink" to="/">
        <>Home</>
      </Link>
      <Link className="headLink" to="/3D">
        <>3D DESIGN</>
      </Link>
      <Link className="headLink" to="/Finances">
        <>FINANCES</>
      </Link>
      <Link className="headLink" to="/Suppliers">
        <>SUPPLIERS</>
      </Link>
      <Link className="headLink" to="/AboutUs">
        <>ABOUT US</>
      </Link>
      <Link className="headLink" to="/Contact">
        <>CONTACT</>
      </Link>
    </div>
  );
}
export default Header;
