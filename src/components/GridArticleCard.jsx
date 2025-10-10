
import React from 'react';

const GridArticleCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
    <div className="h-32 w-full overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <p className="text-gray-500 text-xs mb-1">{post.date}</p>
      <h3 className="text-base font-medium text-gray-800 leading-tight">{post.title}</h3>
    </div>
  </div>
);

export default GridArticleCard




