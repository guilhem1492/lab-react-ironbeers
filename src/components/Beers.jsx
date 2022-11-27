import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setAllBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <ul className="all-beers">
        {allBeers.map((beer) => (
          <Link to={`/beers/${beer._id}`}>
            <li key={beer._id}>
              <img
                className="beer-img"
                src={beer.image_url}
                alt={`Beer name: ${beer.name}`}
              />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
              <hr />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Beers;
