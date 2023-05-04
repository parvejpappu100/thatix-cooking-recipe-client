import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowRecipe = ({ recipe }) => {
  const { name, image, ingredients, cookingMethod, rating } = recipe;
  const [disable, setDisable] = useState(false);

  const notify = () => {
    toast.success("Recipe added favourite list")
    setDisable(true)
  };

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
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span>{rating}</span>
            </div>
            <div>
                <button  disabled={disable} onClick={notify}>
                    <FaHeart></FaHeart>
                    <ToastContainer
                        autoClose={2000}
                    ></ToastContainer>
                </button>
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
