import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80')`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold text-black">
            Best food for your taste
          </h1>
          <p className="mb-5 text-gray-700 text-lg">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-error text-white">Book A Table</button>
            <button className="btn btn-outline">Explore Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
