import React from "react";
import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomBeersImage from "../assets/random-beer.png";
import newBeersImage from "../assets/new-beer.png";

const Home = () => {
  return (
    <div className="homepage">
      <ul>
        <li>
          <img src={allBeersImage} alt="Beers" />
          <Link to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            velit fugiat, molestiae natus aperiam consectetur et reprehenderit
            culpa nulla esse rerum nostrum maiores dolorum repudiandae tempore
            itaque hic provident voluptatibus!
          </p>
        </li>
        <li>
          <img src={randomBeersImage} alt="Random beers" />
          <Link to="/random-beer">
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            velit fugiat, molestiae natus aperiam consectetur et reprehenderit
            culpa nulla esse rerum nostrum maiores dolorum repudiandae tempore
            itaque hic provident voluptatibus!
          </p>
        </li>
        <li>
          <img src={newBeersImage} alt="New beer" />
          <Link to="/new-beer">
            <h2>New Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            velit fugiat, molestiae natus aperiam consectetur et reprehenderit
            culpa nulla esse rerum nostrum maiores dolorum repudiandae tempore
            itaque hic provident voluptatibus!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
