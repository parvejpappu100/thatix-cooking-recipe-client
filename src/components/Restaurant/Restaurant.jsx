import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowRestaurant from "../ShowRestaurant/ShowRestaurant";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurant")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h4 className="italic text-yellow-400 text-center text-xl mt-20">
        Visit our Restaurant
      </h4>
      <h3 className="text-4xl font-semibold text-center">Our All Restaurant</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20 p-2">
        {restaurants.slice(0 , showAll ? 16 : 8).map((restaurant) => (
          <ShowRestaurant
            key={restaurant.id}
            restaurant={restaurant}
          ></ShowRestaurant>
        ))}
      </div>
      <div className="text-center my-5">
          {!showAll && (
            <button
              onClick={handleShowAll}
              className="btn btn-warning p-3 mb-5 rounded font-semibold"
            >
              See More
            </button>
          )}
        </div>
    </div>
  );
};

export default Restaurant;
