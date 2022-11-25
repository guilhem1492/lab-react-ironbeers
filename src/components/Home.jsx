import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <ul>
        <li>
          <img src="../assets/beers.png" alt="Beers" />
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
          <img src="../assets/random-beer.png" alt="Random beers" />
          <Link to="/random-beer">Random Beer</Link>
        </li>
        <li>
          <img src="../assets/new-beer.png" alt="New beer" />
          <Link to="/new-beer">New Beer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
