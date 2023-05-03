import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const loadRecipes = useLoaderData();

  const recipe = loadRecipes.find((recipe) => recipe.id == id);
  console.log(recipe);
  const {name,image,yearsOfExperience,numberOfRecipes,likes,bio,recipes,} = recipe;

  return (
    <div>
      <div className="hero  bg-yellow-100 mb-20 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p>With {yearsOfExperience} years of experience and {numberOfRecipes} Recipes</p>
            <p className="py-6">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
