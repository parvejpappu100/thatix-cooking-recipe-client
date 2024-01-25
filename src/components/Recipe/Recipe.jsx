import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowRecipe from "../ShowRecipe/ShowRecipe";
import useTitle from "../../hooks/useTitle";

const Recipe = () => {
  const { id } = useParams();
  const loadRecipes = useLoaderData();
  useTitle("Recipe")

  const recipe = loadRecipes.find((recipe) => recipe.id == id);
  const { name, image, yearsOfExperience, numberOfRecipes, bio, recipes } =
    recipe;

  return (
    <div>
      <div className="hero  bg-yellow-100 mb-20 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="my-2 font-semibold">
              With {yearsOfExperience} years of experience and {numberOfRecipes}{" "}
              Recipes
            </p>
            <p className="py-6">{bio}</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-3xl md:text-5xl text-center font-bold">
          Recent <span className="text-yellow-500">Recipes</span>
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 lg:container mx-auto px-2">
          {recipes.map((recipe) => (
            <ShowRecipe key={recipe._id} recipe={recipe}></ShowRecipe>
          ))}
        </div>
        <div className="card-actions justify-center mb-10">
          <button className="btn btn-warning p-3 my-5 normal-case text-base rounded font-semibold">
            View All Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
