const ServiceCard = ({ service }) => (
  <div className="flex flex-col items-center text-center max-w-sm">
    <div className="w-full h-60 overflow-hidden rounded-xl mb-6 shadow-md">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
      />
    </div>
    
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {service.title}
    </h3>
    
    <p className="text-gray-600 text-sm leading-relaxed">
      {service.description}
    </p>
  </div>
);

export default ServiceCard