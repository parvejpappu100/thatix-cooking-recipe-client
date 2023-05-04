import React, { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../../components/ChefDetails/ChefDetails";
import Category from "../../components/Category/Category";
import { data } from "autoprefixer";
import Restaurant from "../../components/Restaurant/Restaurant";

const Home = () => {
  const chefs = useLoaderData();

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  const [categories , setCategories] = useState([]);
  useEffect(() =>{
    fetch("https://thatix-cooking-recipe-server-parvejpappu100.vercel.app/category")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div>
      <Banner></Banner>
      <div className="lg:container mx-auto">
        <h4 className="italic text-yellow-400 text-center text-xl mt-20">Choose a category</h4>
        <h3 className="text-4xl font-semibold text-center">Recipe Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-20 ">
          {
            categories.map(category => <Category
            key={category.id}
            category = {category}
            ></Category>)
          }
        </div>
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
        <div>
            <Restaurant></Restaurant>
        </div>
      </div>
    </div>
  );
};

export default Home;
