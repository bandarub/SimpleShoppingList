import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <label className="header__label">Shopping List</label>
    </div>
  );
};

export default Header;
