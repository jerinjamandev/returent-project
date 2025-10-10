const ReviewCard = ({ review }) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-sm flex-1 max-w-sm">
    <blockquote className="space-y-6">
      <p className="text-xl font-serif text-amber-900 leading-relaxed">
        “{review.highlight}”
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
        {review.quote}
      </p>
    </blockquote>
    
    <div className="mt-8 flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-full h-full object-cover" 
          onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-gray-500'); }} 
        />
      </div>
      
      <div className="ml-4">
        <p className="text-sm font-semibold text-gray-800">{review.name}</p>
        <p className="text-xs text-gray-500">{review.location}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard