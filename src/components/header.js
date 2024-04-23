import React from "react";
import logo from "../assets/images/logo192.png";
import "./header.css";

const Header = () => {
  return (
      <div className="header-container">
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="logo" className="header__logo-image" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">is where life happens</span>
            </h1>

            <a href="#" className="button btn--white btn--animated">
              Discover our tours
            </a>
          </div>
        </header>
      </div>
  );
};

export default Header;
