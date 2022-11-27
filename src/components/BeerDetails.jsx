import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const BeerDetails = (props) => {
  const [foundBeer, setFoundBeer] = useState({});
  const { beerId } = useParams();
  console.log("beerId", beerId);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((response) => {
        setFoundBeer(response.data);
      });
  }, [beerId]);

  return (
    <div>
      <Header />

      {!foundBeer && <h3>Beer not found!</h3>}
      {foundBeer && (
        <div className="beer-details">
          <img
            className="beer-img"
            src={foundBeer.image_url}
            alt={`Beer name: ${foundBeer.name}`}
          />
          <h3>{foundBeer.name}</h3>
          <p>{foundBeer.tagline}</p>
          <p>First brewed: {foundBeer.first_brewed}</p>
          <p>Attenation level: {foundBeer.attenuation_level}</p>
          <p>Description: {foundBeer.description}</p>
          <p>Contributed by: {foundBeer.contributed_by}</p>
          <button>
            <Link to="/beers">Back</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BeerDetails;
