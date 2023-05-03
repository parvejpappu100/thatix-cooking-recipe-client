import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { id, name, image, yearsOfExperience, numberOfRecipes, likes } = chef;

  return (
      <div className="card  bg-base-100 border">
        <figure>
          <img className="h-80 rounded-md pt-2"
            src={image}
            alt="Chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="flex items-center justify-between">
            <div>
                <p className="text-xl">Years of Experience: {yearsOfExperience}</p>
                <p className="text-xl">Recipes: {numberOfRecipes}</p>
            </div>
            <div className="flex items-center gap-2">
                <FaThumbsUp></FaThumbsUp>
                <h5>{likes}</h5>
            </div>
          </div>
          <div className="card-actions justify-start">
          <Link to={`/recipe/${id}`}>
                <button  className='btn btn-warning p-3 my-5 normal-case text-base rounded font-semibold'>
                    View Recipe
                </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ChefDetails;
