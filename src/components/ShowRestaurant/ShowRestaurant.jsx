import React from "react";
import { Link } from "react-router-dom";

const ShowRestaurant = ({ restaurant }) => {
  const { image, name, location , link } = restaurant;
  return (
    <a target="_blank" href={link}>
      <div className="card card-compact  bg-base-100 shadow hover:scale-75 duration-1000 ">
        <figure>
          <img
            src={image}
            alt="Restaurant"
          />
        </figure>
        <div className="flex items-center justify-between p-3">
          <h2 className="card-title">{name}</h2>
          <h5>{location}</h5>
        </div>
       
      </div>
    </a>
  );
};

export default ShowRestaurant;
