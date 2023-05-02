import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/nkfn3J9/Burger.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Taste of Thailand</h1>
            <p className="mb-5">
            Discover the vibrant and diverse flavors of Thailand with "Taste of Thailand." Our website features a collection of authentic and modern Thai recipes that are sure to tantalize your taste buds. From spicy curries and savory stir-fries to sweet and refreshing desserts, we've got something for every palate.
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
