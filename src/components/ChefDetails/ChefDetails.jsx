import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = ({ chef }) => {
  console.log(chef);
  const { id, name, image, yearsOfExperience, numberOfRecipes, likes } = chef;

  return (
      <div className="card  bg-base-100 border">
        <figure>
          <img className="h-80 rounded-md pt-2"
            src={image}
            alt="Shoes"
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
            <button className="btn btn-warning normal-case">View Recipe</button>
          </div>
        </div>
      </div>
  );
};

export default ChefDetails;
