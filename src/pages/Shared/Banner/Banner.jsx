import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://i.ibb.co/nkfn3J9/Burger.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <div>
              <h1 className="mb-5 text-5xl font-bold text-neutral-content">Taste of Thailand</h1>
              <p className="mb-5 text-neutral-content">
              Discover the vibrant and diverse flavors of Thailand with "Taste of Thailand." Our website features a collection of authentic and modern Thai recipes that are sure to tantalize your taste buds. From spicy curries and savory stir-fries to sweet and refreshing desserts, we've got something for every palate.
            </p>
            </div>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
