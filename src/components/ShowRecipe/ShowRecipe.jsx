import React from "react";
import { FaHeart, FaRegStar,  FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";

const ShowRecipe = ({ recipe }) => {
  const { name, image, ingredients, cookingMethod, rating } = recipe;
  return (
    <>
      <div className="card bg-base-100 shadow">
        <figure>
          <img
          className="h-80"
            src={image}
            alt="Recipe"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span>{rating}</span>
            </div>
            <div>
                <FaHeart></FaHeart>
            </div>
          </div>
          <p><strong>Ingredients : </strong> {ingredients}</p>
          <p><strong>Cooking Method : </strong> {cookingMethod}</p>
        </div>
      </div>
    </>
  );
};

export default ShowRecipe;
