
import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';




const MenuItemCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <div className="h-48 overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-4 text-center">
      <p className="text-xl font-bold text-red-700 mb-1">${item.price.toFixed(2)}</p>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
      <p className="text-xs text-gray-500">{item.description}</p>

      <div>
        <Link to={`/food/${item._id}`}>
          <button className='btn btn-error text-white mt-8 rounded-3xl'><FaShoppingBasket /> Buy Now</button>
        </Link>
      </div>
    </div>
  </div>
);

export default MenuItemCard