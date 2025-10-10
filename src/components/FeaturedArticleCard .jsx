import React from 'react';


const FeaturedArticleCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
    <div className="h-72 w-full overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <p className="text-gray-500 text-sm mb-2">{post.date}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
      </div>
    </div>
  </div>
);

export default FeaturedArticleCard
