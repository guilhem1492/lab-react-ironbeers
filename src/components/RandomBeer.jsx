import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        //console.log("response.data", response.data);
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="beer-details">
        <img
          className="beer-img"
          src={randomBeer.image_url}
          alt={`Beer name: ${randomBeer.name}`}
        />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>First brewed: {randomBeer.first_brewed}</p>
        <p>Attenation level: {randomBeer.attenuation_level}</p>
        <p>Description: {randomBeer.description}</p>
        <p>Contributed by: {randomBeer.contributed_by}</p>
        {/* <button>
          <Link to="/random-beer">Reload</Link>
        </button> */}
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default RandomBeer;
