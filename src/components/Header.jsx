import React from "react";
import { Link } from "react-router-dom";
import HomePageImage from "../assets/homepage.png";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src={HomePageImage} alt="Home page" />
      </Link>
    </div>
  );
};

export default Header;
