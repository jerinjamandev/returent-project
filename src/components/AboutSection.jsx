import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Aboutimg from '../assets/images/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const AboutSection = () => {

    useEffect(()=>{
        AOS.init();

    },[])
  return (
    <section className="bg-neutral-50 py-20 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
          
        <div data-aos-duration="2000" data-aos="fade-right" className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
          <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={Aboutimg} 
                alt="Delicious food wrap" 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            
            <div 
              className="absolute bg-gray-700 text-white p-8 rounded-xl w-11/12 lg:w-4/5 -bottom-10 right-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0 shadow-xl z-20"
              style={{
                left: '50%',
                transform: 'translate(-50%, 0)',
                bottom: '-40px', 
              }}
              >
              
              <h3 className="text-xl font-semibold mb-6">
                Come and visit us
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center text-sm">
                  <FaPhoneAlt size={16} className="mr-3 text-amber-500 flex-shrink-0" />
                  <span>(414) 857 – 0107</span>
                </li>
                
                <li className="flex items-center text-sm">
                  <FaEnvelope size={16} className="mr-3 text-amber-500 flex-shrink-0" />
                  <span>happytummy@restaurant.com</span>
                </li>
                
                <li className="flex items-start text-sm">
                  <FaMapMarkerAlt size={16} className="mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div data-aos-duration="2000" data-aos="fade-left" className="w-full lg:w-1/2 lg:pl-20 mt-16 lg:mt-0 pt-10 lg:pt-0">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-6">
              We provide healthy food for your family.
            </h2>            
            <p className="text-gray-600 mb-6">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city’s rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>

            <p className="text-gray-600 mb-8">
              At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
            </p>
          <button className="px-8 py-3 mt-4 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 font-medium">
              More About Us
            </button>
          </div>
        </div>
      </div>
      <div className="h-20 lg:h-10"></div>
    </section>
  );
};

export default AboutSection;