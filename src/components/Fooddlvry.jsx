import React from 'react';
// Import specific icons from React Icons library (using Font Awesome 6)
import { FaClock, FaPercent, FaShoppingCart } from 'react-icons/fa';
import img1 from '../assets/images/boy.png'
import img2 from '../assets/images/platter.png'
import img3 from '../assets/images/kababplatter.png'


const DeliverySection = () => {
  // Placeholder image URLs
  const chefImageUrl = img1; 
  const food1ImageUrl =img2;
  const food2ImageUrl =img3;

  return (
    <section className="bg-neutral-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={chefImageUrl} 
                alt="Chef preparing food" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </div>

          <div className="w-full lg:w-1/4 flex flex-col items-center justify-center gap-8 mt-0 lg:mt-16"> {/* Adjust mt-16 for vertical alignment */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={food1ImageUrl} 
                alt="Shrimp dish" 
                className="w-full h-auto object-cover max-h-[250px]" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={food2ImageUrl} 
                alt="Meat platter" 
                className="w-full h-auto object-cover max-h-[250px]" 
              />
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:pl-10 mt-8 lg:mt-0">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-6">
              Fastest Food Delivery <br className="hidden lg:inline"/> in City
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                  <FaClock size={16} className="text-gray-700" />
                </div>
                <span className="text-gray-700 text-lg">Delivery within 30 minutes</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                  <FaPercent size={16} className="text-gray-700" />
                </div>
                <span className="text-gray-700 text-lg">Best Offer & Prices</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                  <FaShoppingCart size={16} className="text-gray-700" />
                </div>
                <span className="text-gray-700 text-lg">Online Services Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;