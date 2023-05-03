import React, { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../../components/ChefDetails/ChefDetails";

const Home = () => {
  const chefs = useLoaderData();

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <Banner></Banner>
      <div className="lg:container mx-auto">
        <h3 className="text-center text-3xl md:text-5xl mt-20 font-semibold text-yellow-400">
          Our Chefs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
          {chefs.slice(0 , showAll ? 12 : 6).map((chef) => (
            <ChefDetails key={chef.id} chef={chef}></ChefDetails>
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
    </div>
  );
};

export default Home;
