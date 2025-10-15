import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../hook/useAxios';

const Fooddetails = () => {
  const { id } = useParams();

  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['food', id],
    queryFn: async () => {
      const res = await axiosinstance.get(`/food/${id}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Something went wrong: {error.message}</p>
      </div>
    );

  const { title, price, description, ingredients, img, category } = data;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={img} alt={title} className="w-full h-full object-cover rounded-xl" />
        </figure>

        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>

          <div className="mt-4">
            <h3 className="font-semibold text-primary">Category:</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-primary">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-secondary">${price.toFixed(2)}</span>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooddetails;
